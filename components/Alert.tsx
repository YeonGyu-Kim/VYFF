'use client';

import { Button } from './ui/button';
import { DialogContent, DialogDescription } from './ui/dialog';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import getLikes from '@/app/actions/getLikes';

type AlertProps = {
  number: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Alert({ number, setIsOpen }: AlertProps) {
  const router = useRouter();
  const handleBtn = async () => {
    setIsOpen((prev) => !prev);
    toast.success('투표가 완료되었습니다!');
    router.push('/thanks');

    /*  const res = await addLikes(number);
    if (res) router.push('/thanks'); */
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
