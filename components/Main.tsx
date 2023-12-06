'use client';

import Image from 'next/image';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Detail from './Detail';
import Grid from './Grid';
import { signOut } from 'next-auth/react';

export default function MainPage() {
  return (
    <div className='flex justify-center'>
      <Dialog>
        <DialogTrigger>
          <div className='grid grid-cols-5'>
            <Grid />
          </div>
        </DialogTrigger>
        <Detail />
      </Dialog>
      <div onClick={() => signOut()}>로그아웃</div>
    </div>
  );
}
