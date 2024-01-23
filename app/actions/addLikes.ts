'use server';

import { db } from '@/lib/db';
import getCurrentUser from './getCurrentUser';

export default async function addLikes(number: string) {
  const currentUser = await getCurrentUser();

  const detail = await db.detail.findUnique({
    where: {
      name: number,
    },
  });

  if (!currentUser || !detail) return;

  if (!currentUser.voted_num) {
    let user = [...(detail?.likes || [])];
    user.push(currentUser.id);
    await db.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        voted_num: number,
      },
    });
    const data = await db.detail.update({
      where: {
        name: number,
      },
      data: {
        likes: user,
      },
    });
    return data;
  } else {
    return '이미 투표가 완료되었습니다.';
  }
}
