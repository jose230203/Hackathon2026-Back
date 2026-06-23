// src/config/db.ts o prisma/client.ts

import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'], // Te muestra en la consola de Express los queries reales que hace la app
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;