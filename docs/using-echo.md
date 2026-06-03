---
layout: docs-layout.vto
title: Using Echo - Echo Documentation
doc_id: using-echo
toc:
  - title: Containers
    href: "#containers"
  - title: Images
    href: "#images"
  - title: Volumes
    href: "#volumes"
  - title: Networks
    href: "#networks"
  - title: Metrics
    href: "#metrics"
  - title: Logs and shell
    href: "#logs-and-shell"
---

# Using Echo

Echo organizes the Docker resources you use most often into focused views for local development.

<h2 id="containers">Containers</h2>

Use the container workspace to review running and stopped containers, inspect status, and perform common actions such as start, stop, restart, pause, resume, and remove.

Echo also groups related services where possible, so local projects are easier to scan when several containers are running at the same time.

<h2 id="images">Images</h2>

Use the images view to review local images, compare size information, and keep unused images easier to spot.

Echo is designed to reduce the need to jump between terminal commands when you are cleaning up local development builds.

<h2 id="volumes">Volumes</h2>

Use the volumes view to inspect persistent Docker data, especially databases, queues, caches, and logs created by local services.

Reviewing volumes before removing them helps avoid deleting data you still need.

<h2 id="networks">Networks</h2>

Use the networks view to inspect local Docker networks and understand how services are connected.

Echo focuses on making bridges, subnets, and connected resources easier to review visually.

<h2 id="metrics">Metrics</h2>

Echo shows live container metrics so you can monitor CPU, memory, network, disk activity, uptime, and restart status while your services run.

Metrics are useful when a local service feels slow, restarts unexpectedly, or consumes more resources than expected.

<h2 id="logs-and-shell">Logs and shell</h2>

Open streaming logs to inspect application output without leaving Echo. When you need to investigate inside a running container, open an interactive shell directly from the container view.

These workflows are designed for quick debugging during local development.
