# Seamless Connect website

The public website for [Seamless Connect](https://seamlessconnect.org/), built with the
Next.js App Router and published as a static export on GitHub Pages.

## Project

**Open Infrastructure for Cross-Provider Internet Operations**

Seamless Connect is an open-source, nonprofit infrastructure project providing a neutral coordination layer between service providers, DNS providers, and registrars, initially focused on DNS configuration through Domain Connect.

Early industry participation includes Name.com (Identity Digital), Cloudflare, DigiCert, Datum.net, and Cloud 66.

[Use Cases & Protocols](https://seamlessconnect.org/use-cases/) · [Canonical project description](https://github.com/seamless-connect/.github/blob/main/PROJECT-DESCRIPTION.md)

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

Install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Source files live under
`app/`, and static assets live under `public/`.

## Checks

```bash
npm run lint
npm test
```

`npm test` runs the production build and then verifies the exported homepage,
sponsor page, canonical URLs, and favicon. The static site is written to `out/`.

## Sponsorship content

[`SPONSORS.md`](./SPONSORS.md) is the single source for the concise sponsorship
page at `/sponsor/`, read at build time. Linux Foundation crowdfunding is the
primary financial contribution channel; FAN remains the current nonprofit
administrator. Technical participation is independent of funding.

`/funding/`, `/sponsors/`, and the retired sponsorship subpages export static
HTML redirects directly to `/sponsor/`, with canonical URLs, noindex metadata,
and visible fallback links. They work without JavaScript or server redirects.
[`FUNDING.md`](./FUNDING.md) points to the consolidated source.

## Deployment

The GitHub Actions workflow validates every pull request targeting `main`.
Pushes to `main` and manually dispatched runs also upload `out/` and deploy it
to GitHub Pages. The custom domain is `seamlessconnect.org`.

## Repository structure

- `app/` — pages, shared components, and styles
- `public/` — static assets
- `tests/` — smoke tests for the exported site
- `SPONSORS.md` — canonical sponsorship content
- `FUNDING.md` — pointer to consolidated sponsorship content
- `.github/workflows/nextjs.yml` — validation and Pages deployment

## License

Licensed under the [Apache License 2.0](./LICENSE).

## Messaging reference and review

The current [`PROJECT-DESCRIPTION.md` on `.github/main`](https://github.com/seamless-connect/.github/blob/main/PROJECT-DESCRIPTION.md) is the canonical public messaging source. Review that source before changing project positioning. Interfaces (including APIs, CLIs, and authorized software agents) support the coordination service. They do not define the project. Messaging changes do not change the charter, technical specifications, provider support, or capability statuses.

Run `python3 -m unittest discover -s tests -p "test_messaging.py"` to check this README for positioning drift. The checks run offline and do not copy or modify the canonical description. They are guardrails for recurring errors, not a substitute for reviewing the canonical source.
