'use server';

import { db } from '@/lib/db';
import getCurrentUser from './getCurrentUser';

export default async function addLikes(number: string) {
  const currentUser = await getCurrentUser();
  const likes = await db.detail.findUnique({
    where: {
      name: `fish${number}`,
    },
  });

  if (!currentUser) return null;

  if (likes) {
    let user = [...(likes.likes || [])];
    user.push(currentUser?.id);
    const data = await db.detail.update({
      where: {
        name: `fish${number}`,
      },
      data: {
        likes: user,
      },
    });
    return data;
  }
}
