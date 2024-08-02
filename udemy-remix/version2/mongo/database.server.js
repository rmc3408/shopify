import { PrismaClient } from '@prisma/client';

/**
 * @type PrismaClient
 */
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
  prisma.$connect();
} 
else 
{
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect().then(()=> console.log('Database connected'));
  }
  prisma = global.__db;
}

export { prisma };