'use client';

import Image from 'next/image';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Detail from './Detail';
import Grid from './Grid';
import { signOut } from 'next-auth/react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { DialogContent, DialogDescription } from '@radix-ui/react-dialog';
import { useState } from 'react';
import Alert from './Alert';

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className='w-1/2 mx-auto'>
      <Card className='p-12 space-y-2'>
        <div>
          <Label>어떤 생선의 정보를 조회하시겠습니까?</Label>
          <br />
          <Label>(번호를 입력하십시오.)</Label>
        </div>
        <Input type='number' placeholder='ex) 32' />
        <Dialog open={isOpen} onOpenChange={toggleOpen}>
          <Button onClick={toggleOpen}>확인</Button>
          <Alert />
        </Dialog>

        {/* <Dialog>
      <DialogTrigger>
        <Grid />
      </DialogTrigger>
      <Detail id={'6570931d3b1edda598ecb5bb'} />
      <div onClick={() => signOut()}>로그아웃</div> 
    </Dialog> */}
      </Card>
    </div>
  );
}
