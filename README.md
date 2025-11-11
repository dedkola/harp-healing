<div align="center">
  <img src="./public/500.png" alt="Crystal Harp Healing" width="600"/>
  
  # Crystal Harp Healing Website

A modern, responsive website for psycho-sound healing services, built with Next.js and TypeScript.

[Live Demo](https://www.crystalharphealing.com) • [Report Bug](../../issues)

</div>

---

## 📖 About

This is a professional wellness website showcasing **Crystal Harp Healing** services. The site offers information about vibrational healing, sound therapy, and psycho-sound healing practices for emotional balance and nervous system regulation.

## ✨ Features

- 🎨 **Modern Design** - Clean, elegant interface with warm amber/brown color palette
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Next.js 16** - Built with the latest Next.js App Router
- 🎯 **SEO Optimized** - Comprehensive meta tags, Open Graph, and sitemap
- 🚀 **Performance** - Optimized images, fonts, and analytics integration
- ♿ **Accessible** - Semantic HTML and ARIA support
- 🗄️ **Database Integration** - PostgreSQL with Prisma ORM for data management
- 🔐 **Protected Dashboard** - HTTP Basic Authentication for admin access
- 📝 **User Signup** - Newsletter/waitlist signup form with database storage
- 🤖 **Bot Protection** - Cloudflare Turnstile integration on signup forms

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui, Radix UI
- **Icons:** Lucide React, Heroicons
- **Database:** PostgreSQL
- **ORM:** Prisma with Accelerate extension
- **Authentication:** HTTP Basic Auth middleware
- **Security:** Cloudflare Turnstile
- **Analytics:** Vercel Analytics, Google Analytics
- **Fonts:** Google Fonts (Open Sans, Lato, EB Garamond, Raleway)

## 🚀 Getting Started

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

   Configure the following variables in `.env`:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/harphealing"

   # Dashboard Authentication
   BASIC_AUTH_USER="your_username"
   BASIC_AUTH_PASS="your_password"

   # Cloudflare Turnstile
   NEXT_PUBLIC_TURNSTILE_SITE_KEY="your_turnstile_site_key"
   TURNSTILE_SECRET_KEY="your_turnstile_secret_key"
   ```

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

## 📁 Project Structure

```
harp-healing/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── dashboard/         # Protected admin dashboard
│   ├── offerings/         # Services page
│   ├── reflections/       # Testimonials page
│   ├── signup/            # User signup page
│   ├── why_sound_heals/   # Educational content
│   ├── api/               # API routes
│   │   ├── signup/        # Signup API endpoint
│   │   └── users/         # User management API
│   ├── ui/                # UI utilities (fonts)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Navbar)
│   ├── sections/         # Page sections (Hero, Footer)
│   └── ui/               # shadcn/ui components
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema definition
├── lib/                  # Utility functions
│   ├── prisma.ts         # Prisma client instance
│   └── utils.ts          # Helper functions
├── middleware.ts         # Auth middleware for protected routes
└── public/               # Static assets
```

## 🎨 Customization

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

## 🔐 Authentication & Database

### Protected Dashboard

The `/dashboard` route is protected using HTTP Basic Authentication via Next.js middleware. Configure credentials in your `.env` file:

```env
BASIC_AUTH_USER="your_username"
BASIC_AUTH_PASS="your_password"
```

The middleware (`middleware.ts`) intercepts requests to `/dashboard` and prompts for authentication.

### Database Schema

The application uses PostgreSQL with Prisma ORM. The User model stores signup information:

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  consent   Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

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

## 📦 Build & Deploy

### Build for production:

```bash
pnpm build
```

### Start production server:

```bash
pnpm start
```

### Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/harp-healing)

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm prisma migrate dev` - Run database migrations
- `pnpm prisma generate` - Generate Prisma Client
- `pnpm prisma studio` - Open Prisma Studio (database GUI)

## 🤝 Contributing

This project was created for a friend. Feel free to fork and customize for your own wellness or healing practice websites.

## 📄 License

This project is available as a template for personal and commercial use.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/) and [Heroicons](https://heroicons.com/)

---

<div align="center">
  Made with ❤️ for wellness practitioners by [@dedkola](https://github.com/dedkola)
</div>
