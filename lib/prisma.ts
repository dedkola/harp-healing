import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

function createPrismaClient() {
  return new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
  }).$extends(withAccelerate())
}

const globalForPrisma = globalThis as typeof globalThis & {
  prismaGlobal?: ReturnType<typeof createPrismaClient>
}

export function getPrisma() {
  const prisma = globalForPrisma.prismaGlobal ?? createPrismaClient()

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prismaGlobal = prisma
  }

  return prisma
}
