---
layout: docs-layout.vto
title: Documentation
doc_id: overview
toc:
  - title: What Echo is
    href: "#what-echo-is"
  - title: Who it is for
    href: "#who-it-is-for"
  - title: What you can manage
    href: "#what-you-can-manage"
  - title: Current status
    href: "#current-status"
---

# Documentation

Echo is a lightweight, high-performance desktop app for managing local Docker environments with a clean visual interface, real-time metrics, logs, and an integrated shell.

<h2 id="what-echo-is">What Echo is</h2>

Echo gives you a native desktop workspace for everyday Docker tasks. It helps you inspect running containers, review images and volumes, understand networks, stream logs, and open shell sessions without switching back to the terminal for every action.

The current app is focused on local Docker workflows. It works best when you already have a Docker-compatible engine running on your machine and want a faster visual way to manage it.

<h2 id="who-it-is-for">Who it is for</h2>

Echo is designed for developers who frequently run local services, Compose projects, databases, background workers, and test environments.

It is useful when you want to:

- See container status and metrics at a glance.
- Start, stop, restart, pause, or remove containers from one place.
- Inspect logs and open a shell quickly.
- Keep images, volumes, and networks easier to review.
- Use a native desktop app instead of a browser-heavy dashboard.

<h2 id="what-you-can-manage">What you can manage</h2>

Echo currently focuses on the core Docker resources used in local development:

- Containers and grouped services.
- Images and local image cleanup workflows.
- Volumes and persistent data.
- Networks and basic topology information.
- Live resource metrics, logs, and shell sessions.

<h2 id="current-status">Current status</h2>

Echo is in active development. The MVP is usable for local Docker workflows, but packaging, signing, and some deeper resource workflows are still evolving.

Start with [Getting Started](/docs/getting-started/) if you are installing Echo for the first time.
