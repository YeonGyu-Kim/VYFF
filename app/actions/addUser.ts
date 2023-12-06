'use server';

import { UserSchema } from '@/components/Form';
import { db } from '@/lib/db';

export default async function addUser(data: UserSchema) {
  const { email, username } = data;
  const user = await db.user.create({
    data: {
      email,
      username,
    },
  });

  return user;
}
