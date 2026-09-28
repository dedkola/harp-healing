import type { MetadataRoute } from 'next'

const SITE_URL = (process.env.SITE_URL ?? 'https://www.crystalharphealing.com').replace(/\/$/, '')

const routes = [
  '/',
  '/444hz',
  '/about',
  '/contact',
  '/offerings',
  '/reflections',
  '/signup',
  '/why_sound_heals',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
