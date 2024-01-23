'use server';

import { db } from '@/lib/db';

export default async function getFishDetail(id: string) {
  try {
    const detail = await db.detail.findUnique({
      where: {
        id: id,
      },
    });

    return detail;
  } catch {
    return null;
  }
}
