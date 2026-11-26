// Rewrites the auto-updated blocks in README.md from public data.
// Runs daily from .github/workflows/update-readme.yml. No dependencies, Node 20+.
//
// Blocks are delimited by HTML comments: <!-- name:start --> ... <!-- name:end -->
//   releases  latest releases across public, non-fork repos
//   updated   recently pushed public, non-fork repos
//   posts     latest posts from the blog feed (left untouched if the feed is down)

import { readFile, writeFile } from "node:fs/promises";

const USER = "Duoquote";
const FEED = "https://blog.dq.ms/rss.xml";
const README = new URL("../README.md", import.meta.url);
const token = process.env.GITHUB_TOKEN;

async function gql(query) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? json));
  return json.data;
}

const day = (iso) => iso.slice(0, 10);
const link = (name, url) => `[${name}](${url})`;

async function repoData() {
  const data = await gql(`{
    user(login: "${USER}") {
      repositories(first: 50, privacy: PUBLIC, isFork: false, ownerAffiliations: OWNER,
                   orderBy: { field: PUSHED_AT, direction: DESC }) {
        nodes {
          name url description pushedAt isArchived
          releases(first: 1, orderBy: { field: CREATED_AT, direction: DESC }) {
            nodes { name tagName url createdAt }
          }
        }
      }
    }
  }`);
  return data.user.repositories.nodes.filter((r) => r.name !== USER);
}

function releases(repos) {
  const rows = repos
    .flatMap((r) => r.releases.nodes.map((rel) => ({ repo: r.name, ...rel })))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5)
    .map((rel) => `- ${link(`${rel.repo} ${rel.tagName}`, rel.url)}, ${day(rel.createdAt)}`);
  return rows.length ? rows.join("\n") : "- Nothing released yet.";
}

function updated(repos) {
  return repos
    .filter((r) => !r.isArchived)
    .slice(0, 5)
    .map((r) => `- ${link(r.name, r.url)}, ${day(r.pushedAt)}`)
    .join("\n");
}

async function posts() {
  try {
    const res = await fetch(FEED, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return null;
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 5).map(([, item]) => {
      const tag = (t) =>
        (item.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${t}>`)) ?? [])[1]?.trim();
      const date = tag("pubDate") ? new Date(tag("pubDate")).toISOString() : "";
      return `- ${link(tag("title"), tag("link"))}${date ? `, ${day(date)}` : ""}`;
    });
    return items.length ? items.join("\n") : null;
  } catch {
    return null;
  }
}

function replace(text, name, body) {
  if (body == null) return text;
  const re = new RegExp(`(<!-- ${name}:start -->)[\\s\\S]*?(<!-- ${name}:end -->)`);
  if (!re.test(text)) return text;
  return text.replace(re, `$1\n${body}\n$2`);
}

const repos = await repoData();
let text = await readFile(README, "utf8");
text = replace(text, "releases", releases(repos));
text = replace(text, "updated", updated(repos));
text = replace(text, "posts", await posts());
await writeFile(README, text);
