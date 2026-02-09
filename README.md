<div align="center">
  <img src="./public/hero.webp" alt="Crystal Harp Healing" width="600"/>

  # Crystal Harp Healing Website

A modern, responsive website for psycho-sound healing services, built with Next.js and TypeScript.

[Live Demo](https://www.crystalharphealing.com) • [Report Bug](../../issues)

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8?style=flat-square&logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-7.3-2d3748?style=flat-square&logo=prisma)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-deployed-f38020?style=flat-square&logo=cloudflare)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169e1?style=flat-square&logo=postgresql&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-black?style=flat-square&logo=shadcnui)

</div>

---

## About

This is a professional wellness website showcasing **Crystal Harp Healing** services by Zhenya, a sound healer and psychotherapist based in Los Angeles. The site offers information about vibrational healing, sound therapy, and psycho-sound healing practices for emotional balance and nervous system regulation.

## Features

- **Modern Design** - Clean, elegant interface with warm amber/beige color palette
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Next.js 16** - Built with the latest Next.js App Router
- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, dynamic sitemap, and structured data (Schema.org JSON-LD)
- **Structured Data** - LocalBusiness, Person, Review, Breadcrumb, and Website schemas for Google rich snippets
- **Performance** - WebP images, font preloading, Google Analytics, Vercel Analytics, and Speed Insights
- **Audio Player** - Integrated sound healing audio experience on the hero section
- **Accessible** - Semantic HTML and ARIA support
- **Database Integration** - PostgreSQL with Prisma ORM for data management
- **Protected Dashboard** - HTTP Basic Authentication for admin access
- **User Signup** - Newsletter/waitlist signup form with database storage
- **Bot Protection** - Cloudflare Turnstile integration on signup forms
- **Custom 404 Page** - Themed error page with navigation links

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript
- **Runtime:** React 19
- **Styling:** Tailwind CSS 4, tw-animate-css
- **UI Components:** shadcn/ui, Radix UI, Headless UI
- **Icons:** Lucide React, Heroicons
- **Database:** PostgreSQL
- **ORM:** Prisma 7 with Accelerate extension
- **Authentication:** HTTP Basic Auth middleware
- **Security:** Cloudflare Turnstile
- **Analytics:** Google Analytics, Vercel Analytics, Vercel Speed Insights
- **Deployment:** Cloudflare Workers with OpenNext
- **Caching:** Cloudflare R2 (incremental cache)
- **Fonts:** Google Fonts (Open Sans, Lato, EB Garamond, Raleway)

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dedkola/harp-healing.git
   cd harp-healing
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Configure the following variables:

   ```env
   # Dashboard Authentication
   BASIC_AUTH_USER="your_username"
   BASIC_AUTH_PASS="your_password"

   # Database (use Prisma Accelerate URL)
   DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=your_api_key"

   # Cloudflare Turnstile
   NEXT_PUBLIC_TURNSTILE_SITE_KEY="your_turnstile_site_key"
   TURNSTILE_SECRET_KEY="your_turnstile_secret_key"
   ```

   For production deployment, set these as Cloudflare Worker secrets and environment variables.

4. Set up the database:

   ```bash
   pnpm prisma migrate dev
   pnpm prisma generate
   ```

5. Run the development server:

   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cloudflare Workers Deployment

This project is configured to deploy to Cloudflare Workers using [@opennextjs/cloudflare](https://github.com/opennextjs/opennextjs-cloudflare).

### Prerequisites

- Cloudflare account
- Wrangler CLI installed globally: `npm install -g wrangler`
- R2 bucket created for incremental cache

### Configuration

The project includes:

- **`wrangler.json`** - Cloudflare Workers configuration
  - Worker name: `crystal-harp-healing`
  - R2 bucket binding for incremental cache
  - Node.js compatibility enabled
  - Assets directory configuration
- **`open-next.config.ts`** - OpenNext configuration with R2 incremental cache
- **`next.config.ts`** - Next.js config optimized for Cloudflare (standalone output, unoptimized images)

### Setup R2 Bucket

1. Create an R2 bucket for incremental caching:

   ```bash
   wrangler r2 bucket create harp-healing-next-inc-cache
   ```

2. Update `wrangler.json` if you use a different bucket name.

### Environment Variables

Set production secrets using Wrangler:

```bash
# Authentication
wrangler secret put BASIC_AUTH_USER
wrangler secret put BASIC_AUTH_PASS

# Database (Prisma Accelerate)
wrangler secret put DATABASE_URL

# Turnstile
wrangler secret put TURNSTILE_SECRET_KEY
```

Set public environment variables:

```bash
wrangler secret put NEXT_PUBLIC_TURNSTILE_SITE_KEY
```

### Deploy Commands

```bash
# Preview deployment locally
pnpm preview

# Deploy to production
pnpm deploy

# Upload without deploying
pnpm upload
```

### Custom Domain

To use a custom domain:

1. Add your domain to Cloudflare
2. Go to Workers & Pages > your worker > Settings > Domains
3. Add custom domain (e.g., `www.crystalharphealing.com`)
4. Update DNS records as prompted

### Important Cloudflare Workers Considerations

- **Database Access**: Must use Prisma Accelerate (not direct database connections)
- **Image Optimization**: Next.js image optimization is disabled (`unoptimized: true`) as it's not supported in Workers
- **Output Mode**: Uses `standalone` output for compatibility with OpenNext
- **Node.js APIs**: Enabled via `nodejs_compat` flag in wrangler.json
- **Caching**: Incremental Static Regeneration (ISR) cache stored in R2 bucket

## Project Structure

```
harp-healing/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (metadata, fonts, analytics, schemas)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── not-found.tsx             # Custom 404 page
│   ├── sitemap.ts                # Dynamic XML sitemap generation
│   ├── robots.txt                # SEO robots file
│   ├── about/page.tsx            # About page (practitioner bio)
│   ├── contact/page.tsx          # Contact page
│   ├── dashboard/page.tsx        # Protected admin dashboard
│   ├── offerings/page.tsx        # Services/offerings page
│   ├── reflections/              # Testimonials section
│   │   ├── page.tsx              # Testimonials page (16 reviews)
│   │   └── TestimonialCard.tsx   # Testimonial card component
│   ├── signup/                   # User signup section
│   │   ├── page.tsx              # Signup form with Turnstile
│   │   └── layout.tsx            # Signup layout
│   ├── why_sound_heals/page.tsx  # Educational content page
│   ├── api/                      # API routes
│   │   ├── signup/route.ts       # POST - user registration
│   │   └── users/route.ts       # GET - list users (admin)
│   └── ui/
│       └── fonts.ts              # Google Fonts configuration
├── components/                   # React components
│   ├── layout/
│   │   └── Navbar.tsx            # Navigation (desktop & mobile)
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section with audio player
│   │   ├── Footer.tsx            # Footer component
│   │   └── StructuredData.tsx    # Schema.org JSON-LD components
│   ├── shadcnblocks/
│   │   └── logo.tsx              # Logo components
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       └── badge.tsx
├── lib/                          # Utility functions
│   ├── prisma.ts                 # Prisma client (with Accelerate)
│   └── utils.ts                  # Helper functions (cn)
├── prisma/
│   └── schema.prisma             # Database schema
├── public/                       # Static assets (images, audio, icons)
├── middleware.ts                  # Auth middleware for /dashboard
├── .github/
│   ├── copilot-instructions.md   # Development setup guide
│   └── dependabot.yml            # Automated dependency updates
└── Configuration files
    ├── next.config.ts
    ├── tailwind.config.js
    ├── wrangler.json
    ├── open-next.config.ts
    ├── tsconfig.json
    └── package.json
```

## Customization

### Colors

The site uses a consistent color palette defined in Tailwind CSS:

- Primary: `#92400E` (amber-800)
- Accents: `#c19a6b`, `#E1D4C7`
- Backgrounds: `#F2EAE0`, `#E1D4C7`

### Fonts

Typography hierarchy is configured in `app/ui/fonts.ts`:

- **Body:** Open Sans
- **Headings:** Lato
- **Quotes:** EB Garamond
- **Buttons:** Raleway

## Authentication & Database

### Protected Dashboard

The `/dashboard` route is protected using HTTP Basic Authentication via Next.js middleware. Configure credentials in your `.env` file:

```env
BASIC_AUTH_USER="your_username"
BASIC_AUTH_PASS="your_password"
```

The middleware (`middleware.ts`) intercepts requests to `/dashboard` and prompts for authentication.

### Database Schema

The application uses PostgreSQL with Prisma ORM and Prisma Accelerate for edge compatibility. The User model stores signup information:

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  consent   Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}
```

**Note:** When deploying to Cloudflare Workers, you must use Prisma Accelerate to connect to your database, as direct database connections are not supported in the Workers environment.

### API Endpoints

- `POST /api/signup` - Create new user signup (with Turnstile verification)
- `GET /api/users` - Retrieve all users (protected route)

### Cloudflare Turnstile

The signup form is protected with Cloudflare Turnstile to prevent spam and bot submissions.

**Setup:**

1. Get your Turnstile keys from [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Create a new site widget
3. Add your domain(s) to the allowed list
4. Configure the keys in your `.env` file:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY="your_site_key_here"
TURNSTILE_SECRET_KEY="your_secret_key_here"
```

The signup API endpoint validates the Turnstile token server-side before storing user data.

See `PRISMA_SETUP.md` for detailed database setup instructions.

## Build & Deploy

### Local Development

```bash
# Development server
pnpm dev

# Local preview (simulates Cloudflare Workers environment)
pnpm preview
```

### Production Deployment

```bash
# Build and deploy to Cloudflare Workers
pnpm deploy
```

The build process:
1. Generates Prisma Client
2. Builds Next.js app in standalone mode
3. Packages with OpenNext for Cloudflare Workers
4. Deploys to Cloudflare with R2 incremental caching

### Alternative: Docker Deployment

A `Dockerfile` is included for traditional container-based deployments (e.g., on VPS, AWS ECS, etc.):

```bash
# Build Docker image
docker build -t harp-healing .

# Run container
docker run -p 3000:3000 harp-healing
```

Or use Docker Compose:

```bash
docker compose up
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Next.js development server |
| `pnpm build` | Generate Prisma Client and build Next.js for production |
| `pnpm preview` | Build and preview in Cloudflare Workers environment |
| `pnpm deploy` | Build and deploy to Cloudflare Workers |
| `pnpm upload` | Build and upload to Cloudflare (without deploying) |
| `pnpm start` | Start production server (for traditional Node.js hosting) |
| `pnpm lint` | Run ESLint |
| `pnpm cf-typegen` | Generate Cloudflare environment types |
| `pnpm prisma migrate dev` | Run database migrations (development) |
| `pnpm prisma generate` | Generate Prisma Client |
| `pnpm prisma studio` | Open Prisma Studio (database GUI) |

## Contributing

This project was created for a friend. Feel free to fork and customize for your own wellness or healing practice websites.

## License

This project is available as a template for personal and commercial use.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Deployed on [Cloudflare Workers](https://workers.cloudflare.com/)
- Powered by [@opennextjs/cloudflare](https://github.com/opennextjs/opennextjs-cloudflare)
- UI components from [shadcn/ui](https://ui.shadcn.com/) and [Headless UI](https://headlessui.com/)
- Icons from [Lucide](https://lucide.dev/) and [Heroicons](https://heroicons.com/)
- Database with [Prisma](https://www.prisma.io/) and [Prisma Accelerate](https://www.prisma.io/accelerate)
- Analytics by [Vercel](https://vercel.com/analytics)

---

<div align="center">
Made with code and love by <a href="https://github.com/dedkola">dedkola</a>
</div>
