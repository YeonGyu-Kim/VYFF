'use server';

import { db } from '@/lib/db';
import getCurrentUser from './getCurrentUser';

export default async function addLikes(number: string) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return null;

  const likes = await db.detail.findUnique({
    where: {
      name: number,
    },
  });

  const isVoted = await db.user.findUnique({
    where: {
      id: currentUser.id,
    },
  });

  if (likes) {
    let user = [...(likes.likes || [])];
    user.push(currentUser?.id);
    const data = await db.detail.update({
      where: {
        name: number,
      },
      data: {
        likes: user,
      },
    });
    return data;
  }
}
