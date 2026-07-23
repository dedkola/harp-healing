<div align="center">
  <img src="./public/github-social-preview.png" alt="Crystal Harp Healing" width="640">

  <p>A responsive website for crystal-harp sound healing services.</p>

  <p>
    <a href="https://www.crystalharphealing.com">Live website</a>
    ·
    <a href="#local-development">Local development</a>
    ·
    <a href="#deployment">Deployment</a>
  </p>

  <p>
    <img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js">
    <img alt="React 19" src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react">
    <img alt="TypeScript 6" src="https://img.shields.io/badge/TypeScript-6-3178c6?style=flat-square&logo=typescript">
    <img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat-square&logo=tailwindcss">
    <img alt="Prisma 7" src="https://img.shields.io/badge/Prisma-7-2d3748?style=flat-square&logo=prisma">
    <img alt="Cloudflare Workers" src="https://img.shields.io/badge/Cloudflare-Workers-f38020?style=flat-square&logo=cloudflare">
  </p>
</div>

> [!NOTE]
> **Project status:** Maintenance is complete. This repository is preserved as a public,
> read-only snapshot; no new features or routine support are planned.

## About

Crystal Harp Healing is a Next.js website for a Los Angeles sound-healing practice. It
combines editorial service pages with an audio experience, testimonial content, structured
SEO data, a Turnstile-protected signup form, and a small authenticated dashboard.

The production site is designed for Cloudflare Workers through OpenNext. A conventional
Node.js Docker image is also included.

## Highlights

- Responsive App Router pages for services, practitioner information, contact details, and
  testimonials
- Crystal-harp audio playback with accessible controls and error states
- Metadata, sitemap, robots rules, and Schema.org JSON-LD
- PostgreSQL signup storage through Prisma Accelerate
- Cloudflare Turnstile verification on the public signup endpoint
- Fail-closed HTTP Basic Authentication for both `/dashboard` and `/api/users`
- Vercel Analytics and Speed Insights
- Cloudflare Workers, Docker, and Dev Container configurations

## Technology

| Area          | Implementation                                            |
| ------------- | --------------------------------------------------------- |
| Application   | Next.js 16, React 19, TypeScript 6                        |
| Styling       | Tailwind CSS 4, shadcn/ui-compatible components           |
| Data          | PostgreSQL, Prisma 7, Prisma Accelerate                   |
| Protection    | Cloudflare Turnstile, HTTP Basic Authentication           |
| Hosting       | Cloudflare Workers with OpenNext and R2 incremental cache |
| Observability | Google Analytics, Vercel Analytics, Speed Insights        |

## Local development

### Requirements

- Node.js 20.19 or newer
- pnpm 11.1.0
- A PostgreSQL database exposed through Prisma Accelerate
- Cloudflare Turnstile site and secret keys

### Setup

```bash
git clone https://github.com/dedkola/harp-healing.git
cd harp-healing
corepack enable
cp .env.example .env
```

Set the values in `.env` before installing dependencies; Prisma Client generation reads
`DATABASE_URL` during `postinstall`:

```dotenv
BASIC_AUTH_USER="your_username"
BASIC_AUTH_PASS="your_strong_password"
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=your_api_key"
NEXT_PUBLIC_TURNSTILE_SITE_KEY="your_turnstile_site_key"
TURNSTILE_SECRET_KEY="your_turnstile_secret_key"
SITE_URL="http://localhost:3000"
```

Install dependencies:

```bash
pnpm install --frozen-lockfile
```

There are intentionally no default dashboard credentials. If either Basic Auth variable is
missing, protected routes return `503` instead of allowing access.

Initialize the database and start the app:

```bash
pnpm prisma db push
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
pnpm validate
pnpm build
```

`pnpm validate` runs ESLint, strict TypeScript checking, and a Prettier check. The production
build also regenerates Prisma Client and requires `DATABASE_URL`.

## Environment variables

| Variable                         | Required       | Purpose                                           |
| -------------------------------- | -------------- | ------------------------------------------------- |
| `DATABASE_URL`                   | Yes            | Prisma Accelerate connection URL                  |
| `BASIC_AUTH_USER`                | Yes for admin  | Username for `/dashboard` and `/api/users`        |
| `BASIC_AUTH_PASS`                | Yes for admin  | Password for `/dashboard` and `/api/users`        |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Yes for signup | Public Turnstile widget key                       |
| `TURNSTILE_SECRET_KEY`           | Yes for signup | Server-side Turnstile verification key            |
| `SITE_URL`                       | No             | Sitemap origin; defaults to the production domain |

Never commit `.env` or `.dev.vars`. The checked-in `.env.example` contains placeholders only.

## Project structure

```text
app/
├── api/
│   ├── signup/route.ts       # Turnstile-verified registration
│   └── users/route.ts        # Authenticated signup listing
├── dashboard/page.tsx        # Admin dashboard
├── signup/                   # Public signup page and metadata
├── reflections/              # Testimonials and review content
├── layout.tsx                # Root metadata, analytics, and schemas
└── sitemap.ts                # Generated public route map
components/
├── layout/                   # Navigation
├── sections/                 # Shared page sections and structured data
└── ui/                       # Reusable UI primitives
lib/
├── prisma.ts                 # Lazy Prisma Accelerate client
└── utils.ts                  # Class-name utilities
prisma/schema.prisma          # PostgreSQL schema
middleware.ts                 # Edge-compatible dashboard and API authentication
```

## Deployment

### Cloudflare Workers

The repository includes `wrangler.json` and `open-next.config.ts`. Create the configured R2
cache bucket once:

```bash
pnpm wrangler r2 bucket create harp-healing-next-inc-cache
```

Add secrets to the Worker:

```bash
pnpm wrangler secret put DATABASE_URL
pnpm wrangler secret put BASIC_AUTH_USER
pnpm wrangler secret put BASIC_AUTH_PASS
pnpm wrangler secret put TURNSTILE_SECRET_KEY
```

Provide `NEXT_PUBLIC_TURNSTILE_SITE_KEY` in the build environment (for example, through a CI
secret or an untracked `.env.production` file). Next.js inlines `NEXT_PUBLIC_` values during the
build, so setting that value only as a Worker runtime secret is too late.

Then preview or deploy:

```bash
pnpm preview
pnpm deploy
```

The public Turnstile key is not confidential, but it should still be configured per environment.

### Docker

```bash
docker build \
  --build-arg NEXT_PUBLIC_TURNSTILE_SITE_KEY="$NEXT_PUBLIC_TURNSTILE_SITE_KEY" \
  -t harp-healing .
docker run --env-file .env -p 3000:3000 harp-healing
```

The image runs as the unprivileged `node` user. `compose.yaml` is available as a minimal
alternative and reads `DATABASE_URL_API_KEY`, the Basic Auth credentials, and the Turnstile keys
from the shell environment.

## Additional documentation

- [Dashboard authentication](./AUTH_SETUP.md)
- [Prisma and API setup](./PRISMA_SETUP.md)
- [Security policy](./SECURITY.md)

## Data and privacy

The repository contains application code and static media only. It does not include production
credentials or signup records. Names and email addresses submitted through the form are stored in
the configured database and exposed only through the authenticated dashboard API.

## License

This project is available under the [MIT License](./LICENSE).

## Credits

Built by [dedkola](https://github.com/dedkola) with
[Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/),
[Cloudflare Workers](https://workers.cloudflare.com/), and
[OpenNext for Cloudflare](https://opennext.js.org/cloudflare).
