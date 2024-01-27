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

  const voteAll = await db.total.findUnique({
    where: {
      id: '65b4df0329ac6349eb1d1d43',
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
    // 투표 총 개수
    let vote = [...(voteAll?.vote_all || [])];
    vote.push(currentUser.id);
    await db.total.update({
      where: {
        id: '65b4df0329ac6349eb1d1d43',
      },
      data: {
        vote_all: vote,
      },
    });
    return data;
  } else {
    return '이미 투표가 완료되었습니다.';
  }
}
