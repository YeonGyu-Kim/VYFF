'use client';

import addLikes from '@/app/actions/addLikes';
import { Button } from './ui/button';
import { DialogContent, DialogDescription } from './ui/dialog';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useState } from 'react';

type AlertProps = {
  number: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Alert({ number, setIsOpen, setIsLoading }: AlertProps) {
  const router = useRouter();
  const handleBtn = async () => {
    const toastId = toast('잠시만 기다려주세요!', {
      isLoading: true,
    });

    setIsOpen((prev) => !prev);
    try {
      const res = await addLikes(number);
      /* if (res) toast.dismiss(toastId); */
      if (res === '이미 투표가 완료되었습니다.') {
        router.push('/thanks');
        toast.update(toastId, {
          render: res,
          type: toast.TYPE.INFO,
          autoClose: 3000,
          isLoading: false,
        });
      } else {
        router.push('/thanks');
        toast.update(toastId, {
          render: '투표가 완료되었습니다!',
          type: toast.TYPE.SUCCESS,
          autoClose: 3000,
          isLoading: false,
        });
      }
      setIsLoading(false);
    } catch (e) {
      toast.error('에러가 발생하였습니다.');
      setIsLoading(false);
      console.error(e);
    }
  };
  return (
    <DialogContent className='max-w-sm md:max-w-xl py-8'>
      <DialogDescription className='text-lg'>
        <span className='text-yellow'>{number}</span>
        <span>{'번 생선에게 투표 하시겠습니까?'}</span>
      </DialogDescription>
      <Button onClick={handleBtn}>투표하기</Button>
    </DialogContent>
  );
}
