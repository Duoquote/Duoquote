# Güven Değirmenci

<img src="logo.png" width="120" align="right" alt="Duoquote logo: red and orange angle brackets">

CTO and Managing Partner at [NextGeography](https://nextgeography.com) in Turkey. I've been on GitHub since 2015. Mostly TypeScript and Python, and more Rust and Go lately.

At NextGeography we build GIS software, essentially everything from the map in the browser to the PostGIS database behind it. Also mobile apps for collecting data in the field, scrapers that keep public datasets up to date, and lately LLM pipelines that turn documents into structured data.

Outside work I build tools I need myself, mostly around Claude Code. If one turns out useful, I clean it up and put it here. Right now I'm also learning how models are trained and fine-tuned, from the basics up, so expect some of that here too.

## Projects

<table>
<tr>
<td width="50%" valign="top">

**[polytini](https://github.com/Duoquote/polytini)**<br>
Encoder and decoder for Google encoded polylines. Encoding is about 2 times as fast as the other JavaScript libraries, and long lines decode about 1.2 times as fast; short lines still decode a bit slower. Also covers HERE flexible polylines, routing engine presets, and adapters for Leaflet, Turf, MapLibre, OpenLayers and deck.gl. [Try it in the browser](https://duoquote.github.io/polytini/).<br>
<sub>JavaScript · Node, Bun, Deno, browser · optional WASM</sub>

</td>
<td width="50%" valign="top">

**[claude-subs](https://github.com/Duoquote/claude-subs)**<br>
If you have more than one Claude account, this switches Claude Code between them in one click. It also shows how much of each account's 5-hour and weekly limit is left, so you know which one to switch to.<br>
<sub>Rust · band inside Claude Code, Windows tray app, CLI</sub>

</td>
</tr>
<tr>
<td width="50%" valign="top">

**[claude-plugins](https://github.com/Duoquote/claude-plugins)**<br>
My Claude Code plugins. The first one is `lead`, an output style that makes Claude Code work like a team lead: it does small things itself and hands bigger work to a builder agent and a few reader agents.<br>
<sub>Claude Code plugin marketplace</sub>

</td>
<td width="50%" valign="top">

**[logo-gen](https://github.com/Duoquote/logo-gen)**<br>
A logo generator you talk to. You describe the brand, it asks a few questions, then generates logos with local models like FLUX.1 Schnell or cloud models through OpenRouter.<br>
<sub>TypeScript · Python · local and cloud image models</sub>

</td>
</tr>
<tr>
<td width="50%" valign="top">

**[ztnet-coredns](https://github.com/Duoquote/ztnet-coredns)**<br>
DNS for ZeroTier networks. It reads members from the ZTNet API and serves them with CoreDNS, so you reach devices by name instead of remembering IPs.<br>
<sub>Shell · Docker · CoreDNS</sub>

</td>
<td width="50%" valign="top">

**[polyline-benchmark](https://github.com/Duoquote/polyline-benchmark)**<br>
Benchmarks for eight JavaScript polyline libraries, encode and decode. Each one is checked against a reference codec first, because a fast decoder that's wrong isn't really useful.<br>
<sub>JavaScript · Node, Bun, Deno</sub>

</td>
</tr>
</table>

Older: [stroke-order-sheet](https://github.com/Duoquote/stroke-order-sheet), printable stroke order practice sheets for Chinese characters, from 2018.

## Writing

I write about the things I build on [blog.dq.ms](https://blog.dq.ms).

<!-- posts:start -->
- [How I run subagents: an orchestrator, a lead developer and the right order](https://blog.dq.ms/orchestrator-subagent-pattern), 2026-11-27
- [polytini: a polyline codec that came out of a benchmark](https://blog.dq.ms/polytini), 2026-11-27
<!-- posts:end -->

## Recently

<table>
<tr>
<td width="50%" valign="top">

**Releases**

<!-- releases:start -->
- [claude-subs v0.4.0](https://github.com/Duoquote/claude-subs/releases/tag/v0.4.0), 2026-11-07
<!-- releases:end -->

</td>
<td width="50%" valign="top">

**Updated**

<!-- updated:start -->
- [duo-web](https://github.com/Duoquote/duo-web), 2026-11-27
- [polytini](https://github.com/Duoquote/polytini), 2026-11-27
- [polyline-benchmark](https://github.com/Duoquote/polyline-benchmark), 2026-11-27
- [logo-gen](https://github.com/Duoquote/logo-gen), 2026-11-27
- [ztnet-coredns](https://github.com/Duoquote/ztnet-coredns), 2026-11-26
<!-- updated:end -->

</td>
</tr>
</table>

<sub>Updated daily by a [GitHub Action](.github/workflows/update-readme.yml).</sub>

## What I use

TypeScript, Python, Rust and Go. On the web side React, Bun and Node, PostGIS for anything spatial, and Capacitor when it has to be a phone app. Docker and Cloudflare for running things.

---

[dq.ms](https://dq.ms) · [Blog](https://blog.dq.ms) · [LinkedIn](https://www.linkedin.com/in/duoquote/) · [Stack Overflow](https://stackoverflow.com/users/7493063/guven-degirmenci)
