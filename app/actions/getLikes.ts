'use server';

import { db } from '@/lib/db';

export default async function getLikes() {
  const data = await db.detail.findMany();

  const a = data.sort((x, y) => y.likes.length - x.likes.length).slice(0, 3);

  console.log(a);
  return data;
}
