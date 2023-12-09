import Image from 'next/image';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Detail from './Detail';
import Grid from './Grid';
import { signOut } from 'next-auth/react';

export default function MainPage() {
  return (
    <Dialog>
      <DialogTrigger>
        <Grid />
      </DialogTrigger>
      <Detail id={'6570931d3b1edda598ecb5bb'} />
      {/*   <div onClick={() => signOut()}>로그아웃</div> */}
    </Dialog>
  );
}
