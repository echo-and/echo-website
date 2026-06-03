# Echo Website

Official website for Echo, a lightweight native GUI for managing local Docker environments.

The site is built with [Lume](https://lume.land/) and Deno. It includes the homepage, documentation, changelog, pricing section, and legal pages.

## Requirements

- Deno

## Development

Start the local development server:

```sh
deno task serve
```

Build the site:

```sh
deno task build
```

The generated site is written to `_site/`.

## Project structure

```text
_components/       Shared Vento components
_includes/         Page layouts
assets/            Styles and images
docs/              Markdown documentation pages
index.vto          Homepage
changelog.md       Changelog page
terms.md           Terms of Service
privacy.md         Privacy Policy
license.md         License page
```

## Content

- Homepage: `index.vto`
- Documentation: `docs/*.md`
- Changelog: `changelog.md`
- Legal pages: `terms.md`, `privacy.md`, `license.md`

## Deployment

Run a production build and deploy the contents of `_site/` with your preferred static hosting provider.
