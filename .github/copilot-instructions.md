# Copilot Coding Agent Instructions - Crystal Harp Healing

## Repository Overview

**Purpose**: Professional wellness website for Crystal Harp Healing services, showcasing psycho-sound healing, vibrational healing, and sound therapy for emotional balance and nervous system regulation.

**Tech Stack**:
- **Framework**: Next.js 16.1.6 with App Router (Turbopack)
- **Language**: TypeScript 5.x
- **Runtime**: Node.js 20+ required
- **Package Manager**: pnpm (NOT npm)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui, Radix UI
- **Database**: PostgreSQL with Prisma ORM 7.3.0 + Prisma Accelerate extension
- **Authentication**: HTTP Basic Auth middleware
- **Security**: Cloudflare Turnstile bot protection
- **Deployment**: Cloudflare Workers with @opennextjs/cloudflare
- **Caching**: Cloudflare R2 (incremental cache)

**Repository Size**: Medium (~30 source files, excluding node_modules)

## Critical Build Requirements

### Environment Variables

**ALWAYS set DATABASE_URL before running ANY Prisma or build commands**. The project WILL FAIL without it:

```bash
export DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=dummy_key_for_testing"
```

For local development, create `.dev.vars` file (NOT committed):
```env
DATABASE_URL=prisma://accelerate.prisma-data.net/?api_key=your_api_key
BASIC_AUTH_USER=admin
BASIC_AUTH_PASS=password
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

### Package Manager - CRITICAL

**ALWAYS use `pnpm` commands, NEVER use `npm` or `yarn`**:
- The project uses `pnpm-lock.yaml`
- Using npm/yarn will create conflicting lock files
- Install pnpm globally if not available: `npm install -g pnpm`

## Build & Development Commands

### Initial Setup (Run in this order)

1. **Install pnpm** (if not installed):
   ```bash
   npm install -g pnpm
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```
   - **Known Issue**: The postinstall script runs `prisma generate`, which requires DATABASE_URL
   - **Workaround**: Set DATABASE_URL environment variable before running `pnpm install`, or run `DATABASE_URL="dummy_url" pnpm install`

3. **Generate Prisma Client** (if not already generated):
   ```bash
   DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=dummy" pnpm prisma generate
   ```
   - Time: ~30-60 seconds
   - Must be run after any schema changes

### Development

**Start development server**:
```bash
pnpm dev
```
- Runs on `http://localhost:3000`
- Hot reload enabled
- No DATABASE_URL needed for dev server to start (only for database operations)

### Linting

**Run linter**:
```bash
pnpm lint
```
- Uses ESLint with Next.js config
- Config: `eslint.config.mjs`
- **Known Issues**: Currently has 7 linting errors related to unescaped apostrophes in JSX:
  - `app/about/page.tsx` (2 errors)
  - `app/reflections/page.tsx` (5 errors)
  - These are minor and don't block builds

### Building

**Production build**:
```bash
DATABASE_URL="your_db_url" pnpm build
```
- **CRITICAL**: DATABASE_URL must be set or build will fail immediately
- Time: ~2-3 minutes (with internet access)
- Steps: `prisma generate` → `next build`
- **Known Issue**: Build requires internet access to download Google Fonts (Open Sans, Lato, EB Garamond, Raleway)
- If fonts fail to download, build will fail with "Failed to fetch from Google Fonts" error

**Cloudflare Workers build**:
```bash
pnpm preview  # Build and preview locally
pnpm deploy   # Build and deploy to Cloudflare
pnpm upload   # Build and upload without deploying
```

### Database Commands

**Push schema to database**:
```bash
DATABASE_URL="your_db_url" pnpm prisma db push
```

**Open Prisma Studio** (database GUI):
```bash
DATABASE_URL="your_db_url" pnpm prisma studio
```

**Run migrations** (development):
```bash
DATABASE_URL="your_db_url" pnpm prisma migrate dev
```

### Docker Deployment (Alternative)

```bash
docker build -t harp-healing .
docker run -p 3000:3000 harp-healing
# Or use: docker compose up
```

## Project Structure

```
harp-healing/
├── .github/               # GitHub configuration
│   └── dependabot.yml    # Dependency updates config
├── app/                   # Next.js App Router (main application code)
│   ├── about/            # About page
│   ├── api/              # API routes
│   │   ├── signup/       # POST /api/signup - user registration
│   │   └── users/        # GET /api/users - fetch all users
│   ├── contact/          # Contact page
│   ├── dashboard/        # Protected admin dashboard (HTTP Basic Auth)
│   ├── offerings/        # Services page
│   ├── reflections/      # Testimonials page
│   ├── signup/           # User signup page with Turnstile
│   ├── why_sound_heals/  # Educational content
│   ├── ui/               # Font definitions (fonts.ts)
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Home page
│   ├── robots.txt        # SEO robots file
│   └── sitemap.ts        # Dynamic sitemap generation
├── components/            # React components
│   ├── layout/           # Navbar component
│   ├── sections/         # Hero, Footer sections
│   ├── shadcnblocks/     # Custom shadcn blocks
│   └── ui/               # shadcn/ui components (Button, Accordion, etc.)
├── lib/                   # Utility functions
│   ├── prisma.ts         # Prisma client singleton with Accelerate extension
│   └── utils.ts          # Helper functions (cn utility)
├── prisma/               # Database
│   └── schema.prisma     # Database schema (User model)
├── public/               # Static assets
├── middleware.ts         # HTTP Basic Auth for /dashboard
├── package.json          # Dependencies and scripts
├── pnpm-lock.yaml        # pnpm lock file (DO NOT DELETE)
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js config (standalone, unoptimized images)
├── open-next.config.ts   # OpenNext config (R2 incremental cache)
├── wrangler.json         # Cloudflare Workers config
├── tailwind.config.js    # Tailwind CSS configuration
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration
├── Dockerfile            # Docker build config
└── compose.yaml          # Docker Compose config
```

## Key Architecture Details

### Database Schema (Prisma)

**User Model** (`prisma/schema.prisma`):
- `id`: String (cuid, primary key)
- `name`: String
- `email`: String (unique)
- `consent`: Boolean (default: true)
- `createdAt`: DateTime
- `updatedAt`: DateTime

**Important**: Must use Prisma Accelerate connection URL for Cloudflare Workers deployment (format: `prisma://accelerate.prisma-data.net/?api_key=...`)

### Authentication

**Protected Routes**: `/dashboard/*` uses HTTP Basic Authentication
- Middleware: `middleware.ts`
- Environment vars: `BASIC_AUTH_USER` and `BASIC_AUTH_PASS`
- Works in both dev (`pnpm dev`) and preview (`pnpm preview`)

### API Endpoints

1. **POST /api/signup** - User registration
   - Validates Cloudflare Turnstile token
   - Creates user in database
   - Returns 409 if email already exists

2. **GET /api/users** - Fetch all users
   - Returns array of all registered users
   - Used by dashboard page

## Configuration Files

- **tsconfig.json**: TypeScript compiler options, path aliases (`@/*` → `./`)
- **next.config.ts**: Standalone output mode, unoptimized images (for Cloudflare)
- **wrangler.json**: Cloudflare Workers config (worker name: `crystal-harp-healing`, R2 bucket for cache)
- **tailwind.config.js**: Custom fonts (Open Sans, Lato, EB Garamond, Raleway)
- **eslint.config.mjs**: ESLint with Next.js rules
- **components.json**: shadcn/ui configuration

## Validation & CI/CD

**Pre-commit Checks**: No automated pre-commit hooks configured

**CI/CD**: Only Dependabot configured (`.github/dependabot.yml`)
- Weekly npm dependency updates
- Auto-assigns to @dedkola

**Manual Validation Steps**:
1. Run `pnpm lint` to check for linting errors
2. Run `DATABASE_URL="..." pnpm build` to ensure build succeeds
3. Test locally with `pnpm dev`
4. For Cloudflare deployment, test with `pnpm preview`

## Known Issues & Workarounds

### 1. Build Requires DATABASE_URL
**Issue**: `prisma generate` needs DATABASE_URL, build fails without it  
**Workaround**: Always set DATABASE_URL before running `pnpm build` or `pnpm install`

### 2. Google Fonts Download Requires Internet
**Issue**: Next.js build downloads fonts from Google Fonts, fails in offline environments  
**Symptoms**: "Failed to fetch `Font Name` from Google Fonts" errors  
**Workaround**: Build requires internet access; cannot be worked around easily

### 3. Linting Errors in JSX
**Issue**: 7 unescaped apostrophe errors in `app/about/page.tsx` and `app/reflections/page.tsx`  
**Impact**: Warnings only, doesn't block builds  
**Fix**: Replace `'` with `&apos;` or `&#39;` in JSX content

### 4. pnpm Required
**Issue**: Project is built with pnpm, npm/yarn will cause conflicts  
**Workaround**: Always use pnpm; install globally if needed

## Making Changes

### Adding/Modifying Pages
- Pages are in `app/` directory (App Router)
- Each folder in `app/` becomes a route (e.g., `app/about/page.tsx` → `/about`)
- Use `layout.tsx` for shared layouts

### Modifying Components
- React components are in `components/`
- shadcn/ui components are in `components/ui/`
- Import using `@/components/...` path alias

### Database Changes
1. Modify `prisma/schema.prisma`
2. Run `DATABASE_URL="..." pnpm prisma db push` (or `pnpm prisma migrate dev`)
3. Run `DATABASE_URL="..." pnpm prisma generate` to update Prisma Client

### Styling Changes
- Global styles: `app/globals.css`
- Tailwind classes: Use utility classes
- Custom fonts: Defined in `app/ui/fonts.ts` and `tailwind.config.js`

## Important Notes

1. **Trust These Instructions**: Use the commands and information provided here first. Only search for additional information if something is unclear or doesn't work.

2. **Environment Setup**: Always verify DATABASE_URL is set before running Prisma or build commands.

3. **Package Manager**: Never mix package managers. This project uses pnpm exclusively.

4. **Build Time**: Full builds take 2-3 minutes with internet access. Plan accordingly.

5. **Cloudflare Deployment**: Must use Prisma Accelerate (not direct database connections) in production.

6. **Image Optimization**: Disabled (`unoptimized: true`) because Cloudflare Workers doesn't support Next.js image optimization.

7. **Middleware Deprecation**: Next.js shows a warning about middleware convention. This is expected and doesn't block functionality.

8. **Node.js Version**: Requires Node.js 20+ (project tested with Node.js 20.20.0).

## Quick Reference

**Install deps**: `pnpm install`  
**Dev server**: `pnpm dev`  
**Lint**: `pnpm lint`  
**Build**: `DATABASE_URL="..." pnpm build`  
**Prisma generate**: `DATABASE_URL="..." pnpm prisma generate`  
**Prisma Studio**: `DATABASE_URL="..." pnpm prisma studio`  
**Preview (Cloudflare)**: `pnpm preview`  
**Deploy (Cloudflare)**: `pnpm deploy`
