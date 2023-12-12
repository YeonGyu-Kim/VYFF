'use server';

import { UserSchema } from '@/components/Form';
import { db } from '@/lib/db';

export default async function addUser(data: UserSchema) {
  const { email, username } = data;
  const existUser = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existUser) {
    const newUser = await db.user.create({
      data: {
        email,
        username,
      },
    });
    return newUser;
  } else {
    return existUser;
  }
}
