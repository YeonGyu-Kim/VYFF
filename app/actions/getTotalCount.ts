'use server';

import { db } from '@/lib/db';

export default async function getTotalCount() {
  const data = await db.total.findMany();
  return data;
}
