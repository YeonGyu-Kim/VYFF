'use client';

import addLikes from '@/app/actions/addLikes';
import { Button } from './ui/button';
import { DialogContent, DialogDescription } from './ui/dialog';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type AlertProps = {
  number: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Alert({ number, setIsOpen }: AlertProps) {
  const router = useRouter();
  const handleBtn = async () => {
    setIsOpen((prev) => !prev);
    toast.success('투표가 완료되었습니다!');
    const res = await addLikes(number);
    if (res) router.push('/thanks');
  };
  return (
    <DialogContent className='max-w-sm md:max-w-xl py-8'>
      <DialogDescription>{`${number}번 생선에게 투표 하시겠습니까?`}</DialogDescription>
      <Button onClick={handleBtn}>투표하기</Button>
    </DialogContent>
  );
}
