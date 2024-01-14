'use server';

import { db } from '@/lib/db';
import getCurrentUser from './getCurrentUser';

export default async function getLikes() {
  const top3 = await db.detail.findMany({
    take: 3,
    where: {
      name: 'fish1',
    },
  });
  return { top3 };
}
