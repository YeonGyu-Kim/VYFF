'use server';

import { db } from '@/lib/db';
import getCurrentUser from './getCurrentUser';

export default async function getAllFish() {
  const currentUser = await getCurrentUser();
  const data = await db.detail.findMany();

  const votedFish = data.find((item) => item.name === currentUser?.voted_num);
  return votedFish;
}
