'use server';

import { db } from '@/lib/db';

export default async function getLikes() {
  const data = await db.detail.findMany();
  const top3 = data.sort((x, y) => y.likes.length - x.likes.length).slice(0, 3);

  return top3;
}
