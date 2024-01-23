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

    try {
      const res = await addLikes(number);

      if (res === '이미 투표가 완료되었습니다.') {
        toast(res, {
          icon: '❗',
        });
      } else {
        toast.success('투표가 완료되었습니다!');
      }
      router.push('/thanks');
    } catch (e) {
      toast.error('에러가 발생하였습니다.');
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
