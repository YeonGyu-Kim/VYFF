'use client';

import { Dialog } from '@/components/ui/dialog';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import Alert from './Alert';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Error from './Error';
import { toast } from 'react-toastify';
import { DotLoader } from 'react-spinners';

const schema = z
  .object({
    number: z.string().min(1, '숫자를 입력해주세요.'),
  })
  .refine((data) => Number(data.number) < 55, {
    message: '54번 생선까지 투표 가능합니다.',
    path: ['number'],
  });

type Schema = z.infer<typeof schema>;

export default function MainPage({ currentUser }: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const number = watch('number');

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit = (data: Schema) => {
    if (data) {
      //setIsLoading(true);
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    toast.success(`${currentUser.username}님 반갑습니다!`);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex justify-center items-center overflow-x-hidden inset-0 overflow-y-auto fixed z-50'
    >
      {!isLoading ? (
        <Card className='relative px-8 py-12 mx-8 w-full space-y-3 max-w-xl'>
          <Label>
            당신의 마음을 사로잡은 생선의{' '}
            <span className='text-yellow font-semibold'>번호</span>를
            입력하십시오.
          </Label>
          <Input
            type='text'
            placeholder='ex) 32'
            value={Number(number) || ''}
            {...register('number')}
          />
          {errors.number && <Error>{errors.number.message}</Error>}
          <Dialog open={isOpen} onOpenChange={toggleOpen}>
            <Button className='w-full' disabled={isLoading}>
              확인
            </Button>
            <Alert
              number={number}
              setIsOpen={setIsOpen}
              setIsLoading={setIsLoading}
            />
          </Dialog>
        </Card>
      ) : (
        <DotLoader color='#ff9d00' />
      )}
    </form>
  );
}
