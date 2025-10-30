# AI Agent Instructions for Harp Healing Project

## Project Overview
Harp Healing is a Next.js 16.0.0 website focused on psycho-sound healing and wellness services. The project uses TypeScript, Tailwind CSS, and various React components to create a modern, responsive web experience.

## Architecture

### Core Technologies
- Next.js 16.0.0 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components for UI elements
- Vercel Analytics for performance monitoring

### Project Structure
```
app/                 # Next.js app directory (App Router)
  ui/               # Shared UI components
    fonts.ts        # Font configuration
    Hero_*.tsx      # Hero section variations
    Navbar*.tsx     # Navigation components
  demo*/            # Demo page variations
components/         # Reusable components
  ui/              # shadcn/ui components
lib/               # Utility functions
public/            # Static assets
  hires/           # High-resolution images
```

## Key Development Patterns

### Navigation Components
Four Navbar variants exist (`Navbar1`-`Navbar4`), each implementing:
- Responsive mobile/desktop layouts
- Logo with configurable image/title
- Dropdown menus with icons
- Client-side interactivity ('use client')

Example pattern from `Navbar1.tsx`:
```tsx
'use client'
interface MenuItem {
  title: string;
  url: string;
  items?: Array<{
    title: string;
    description: string;
    icon: JSX.Element;
    url: string;
  }>;
}
```

### Typography System
Project uses a custom font hierarchy defined in `app/ui/fonts.ts`:
- Body text: Open Sans (--font-open-sans)
- Headings: Lato (--font-lato) 
- Quotes: EB Garamond (--font-eb-garamond)
- Buttons: Raleway (--font-raleway)

### Color Scheme
Consistent color palette using Tailwind hex values:
- Primary backgrounds: `#E1D4C7`, `#F2EAE0`
- Gradients: `from-[#e1bc8f] via-[#ecd8ae] to-[#f7e9d2]`
- Text: Default dark (`text-gray-900`) for readability

### Component Patterns
1. Hero sections follow naming `Hero_new{n}.tsx`
2. All pages use consistent section structure:
```tsx
<section className="relative isolate">
  {/* Background image */}
  <div className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
       style={{ backgroundImage: "url('/hires/image-name.png')" }} />
  
  {/* Content container */}
  <div className="mx-auto max-w-2xl px-6 py-32 sm:py-40 lg:py-48">
    {/* Content */}
  </div>
</section>
```

### Page Construction
1. Import required components at top
2. Include navigation component (usually `Navbar1`)
3. Structure content in semantic sections
4. Add testimonials where appropriate

## Development Workflow

### Local Development
```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Run production build
pnpm lint       # Run ESLint
```

### Creating New Pages
1. Create directory in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` with default export
3. Follow existing layout patterns:
   - Include navigation
   - Use consistent section structure
   - Maintain typography hierarchy
   - Apply standard gradient backgrounds

### Component Guidelines
1. Place shared UI in `app/ui/`
2. Use 'use client' directive for interactive components
3. Follow TypeScript patterns with proper interfaces
4. Maintain responsive designs using Tailwind breakpoints
5. Keep consistent with existing naming patterns

### Image Best Practices
1. Store high-res images in `public/hires/`
2. Use Next.js Image component for optimization
3. Apply images as backgrounds using consistent pattern:
```tsx
style={{
    backgroundImage: "url('/hires/image-name.png')",
    backgroundRepeat: "no-repeat",
}}
```

### Analytics & Performance
1. Vercel Analytics integration in `layout.tsx`
2. Optimized images and responsive loading
3. Client/server component separation
4. Proper font loading with `next/font/google`