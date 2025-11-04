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

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui, Radix UI
- **Icons:** Lucide React, Heroicons
- **Analytics:** Vercel Analytics, Google Analytics
- **Fonts:** Google Fonts (Open Sans, Lato, EB Garamond, Raleway)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/harp-healing.git
   cd harp-healing
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
harp-healing/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── offerings/         # Services page
│   ├── reflections/       # Testimonials page
│   ├── why_sound_heals/   # Educational content
│   ├── ui/                # UI utilities (fonts)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Navbar)
│   ├── sections/         # Page sections (Hero, Footer)
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
└── lib/                  # Utility functions
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
  Made with ❤️ for wellness practitioners
</div>
