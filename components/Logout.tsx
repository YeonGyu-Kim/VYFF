'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <div className='flex justify-center py-8' onClick={() => signOut()}>
      로그아웃
    </div>
  );
}
