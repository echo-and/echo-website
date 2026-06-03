---
layout: docs-layout.vto
title: Troubleshooting - Echo Documentation
doc_id: troubleshooting
toc:
  - title: Docker is unavailable
    href: "#docker-is-unavailable"
  - title: The OS blocks Echo
    href: "#the-os-blocks-echo"
  - title: Archive issues
    href: "#archive-issues"
  - title: Logs or shell do not open
    href: "#logs-or-shell-do-not-open"
---

# Troubleshooting

Use these checks when Echo does not open as expected or cannot show your local Docker resources.

<h2 id="docker-is-unavailable">Docker is unavailable</h2>

If Echo opens but cannot show containers or other resources, confirm that your Docker-compatible engine is installed and running.

You can also run a quick terminal check:

```sh
docker ps
```

If that command cannot connect, start Docker Desktop, Colima, Lima, OrbStack, or your preferred local engine, then reopen Echo.

<h2 id="the-os-blocks-echo">The OS blocks Echo</h2>

The current MVP build is unsigned. macOS or Windows may block the app on first launch.

Use the first-run steps in [Getting Started](/docs/getting-started/) and make sure you downloaded Echo from the official GitHub Releases page.

<h2 id="archive-issues">Archive issues</h2>

If the app does not launch after extraction, try extracting the archive again with your system archive tool.

On Linux, confirm the extracted binary has execute permission:

```sh
chmod +x echo
```

<h2 id="logs-or-shell-do-not-open">Logs or shell do not open</h2>

If logs or shell sessions do not open, confirm that the target container is still running and that Docker is responsive.

Restarting the affected container can help if the container exited or became unhealthy during local development.
