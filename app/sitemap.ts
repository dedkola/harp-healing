// app/sitemap.ts
import fs from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'

const SITE_URL = process.env.SITE_URL ?? 'https://www.crystalharphealing.com'
const PAGE_NAMES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js']

function findPageFile(dir: string): string | null {
  for (const name of PAGE_NAMES) {
    const p = path.join(dir, name)
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p
  }
  return null
}

function collectPages(dir: string, route = ''): string[] {
  let pages: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  // include this directory if it contains a page file
  if (findPageFile(dir)) pages.push(route || '/')

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const name = entry.name

    // skip unwanted folders
    if (name === 'api' || name.startsWith('_') || name.startsWith('.')) continue

    const childDir = path.join(dir, name)

    // group folders like (marketing) - descend but do not add the segment to the route
    if (name.startsWith('(') && name.endsWith(')')) {
      pages = pages.concat(collectPages(childDir, route))
      continue
    }

    // skip dynamic segments like [slug] (can't enumerate)
    if (name.startsWith('[')) continue

    const childRoute = route ? `${route}/${name}` : `/${name}`
    pages = pages.concat(collectPages(childDir, childRoute))
  }
  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')
  if (!fs.existsSync(appDir)) return []

  const routes = collectPages(appDir)
  const unique = Array.from(new Set(routes))

  return unique.map((r) => {
    // attempt to find the file used to compute lastModified
    const dirForRoute = r === '/' ? appDir : path.join(appDir, r.replace(/^\//, ''))
    const pageFile = findPageFile(dirForRoute)
    let lastModified = new Date()
    if (pageFile) {
      try {
        lastModified = fs.statSync(pageFile).mtime
      } catch {}
    }

    return {
      url: `${SITE_URL}${r}`,
      lastModified,
      changeFrequency: r === '/' ? 'weekly' : 'monthly',
      priority: r === '/' ? 1 : 0.7,
    }
  })
}
