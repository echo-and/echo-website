---
layout: docs-layout.vto
title: Getting Started - Echo Documentation
doc_id: getting-started
toc:
  - title: Download
    href: "#download"
  - title: Prerequisites
    href: "#prerequisites"
  - title: First launch
    href: "#first-launch"
  - title: macOS
    href: "#macos"
  - title: Windows
    href: "#windows"
  - title: Linux
    href: "#linux"
  - title: Next step
    href: "#next-step"
---

# Getting Started

Install Echo, make sure Docker is available, and open the app for the first time.

<h2 id="download">Download</h2>

MVP builds are published on the [GitHub Releases](https://github.com/echo-and/echo/releases) page.

Echo currently ships as unsigned portable archives:

- macOS: `echo-*-apple-darwin.tar.gz`
- Linux: `echo-*-unknown-linux-gnu.tar.gz`
- Windows: `echo-*-windows-msvc.zip`

Download the archive for your operating system, extract it, and move the app to a location you normally use for local tools or applications.

<h2 id="prerequisites">Prerequisites</h2>

Echo manages a local Docker-compatible environment. Before launching Echo, make sure one of these is installed and running:

- Docker Desktop
- Docker CE
- Colima
- Lima
- OrbStack

The Docker CLI is recommended because it helps keep your local Docker environment predictable.

<h2 id="first-launch">First launch</h2>

The current MVP release does not include installers, code signing, or notarization yet. Your operating system may block or warn about Echo the first time you open it.

This is expected for the current early build. Future mature releases are planned to include smoother packaging, signed installers, and notarized macOS builds to avoid most of these manual steps.

<h2 id="macos">macOS</h2>

If macOS blocks Echo because it cannot verify the developer:

1. Open Finder and locate the extracted Echo app.
2. Control-click or right-click the app.
3. Choose **Open**.
4. Confirm that you want to open it.

If macOS still blocks the app, open **System Settings > Privacy & Security** and allow Echo from the security prompt near the bottom of the page.

<h2 id="windows">Windows</h2>

If Windows SmartScreen warns you about the app:

1. Make sure you downloaded Echo from the official GitHub Releases page.
2. Open the extracted Echo executable.
3. Choose **More info**.
4. Choose **Run anyway**.

This warning is expected while Echo is distributed as an unsigned portable archive.

<h2 id="linux">Linux</h2>

After extracting the archive, your desktop environment may require execute permission before launching Echo.

If the app does not start, mark the binary as executable from your file manager or terminal:

```sh
chmod +x echo
```

Then launch Echo again while your Docker-compatible engine is running.

<h2 id="next-step">Next step</h2>

After Echo opens, continue to [Using Echo](/docs/using-echo/) to learn the main container, image, volume, network, log, shell, and metrics workflows.
