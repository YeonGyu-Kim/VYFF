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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Error from './Error';

const schema = z
  .object({
    number: z.string().min(1, '숫자를 입력해주세요.'),
  })
  .refine((data) => Number(data.number) < 54, {
    message: '54미만입니다.',
    path: ['number'],
  });

type Schema = z.infer<typeof schema>;

export default function MainPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const [isOpen, setIsOpen] = useState(false);

  const number = watch('number');

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit = (data: Schema) => {
    if (data) {
      setIsOpen((prev) => !prev);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto'>
      <Card className='p-12 space-y-2'>
        <div>
          <Label>어떤 생선의 정보를 조회하시겠습니까?</Label>
          <br />
          <Label>(번호를 입력하십시오.)</Label>
        </div>
        <Input
          type='text'
          placeholder='ex) 32'
          value={Number(number) || ''}
          {...register('number')}
        />
        {errors.number && <Error>{errors.number.message}</Error>}
        <Dialog open={isOpen} onOpenChange={toggleOpen}>
          <Button>확인</Button>
          <Alert number={number} />
        </Dialog>
        {/* <div onClick={() => signOut()}>로그아웃</div> */}
      </Card>
    </form>
  );
}
