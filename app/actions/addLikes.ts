'use server';

import { db } from '@/lib/db';
import getCurrentUser from './getCurrentUser';

export default async function addLikes(id: string) {
  const currentUser = await getCurrentUser();
  const likes = await db.detail.findUnique({
    where: {
      id: id,
    },
  });

  if (!currentUser) return null;

  console.log(likes);

  if (likes) {
    let user = [...(likes.likes || [])];
    user.push(currentUser?.id);
    const data = await db.detail.update({
      where: {
        id: id,
      },
      data: {
        likes: user,
      },
    });
    return data;
  }

  /*   const detail = await db.detail.update({
    where: {
      id: currentUser.id,
    },
    data: {
      likes,
    },
  }); */
}
