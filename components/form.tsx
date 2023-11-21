'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card } from './ui/card';

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
});

type UserSchema = z.infer<typeof userSchema>;

export default function UserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof userSchema>) => {
    console.log(data);
  };

  return (
    <form
      className='flex justify-center items-center overflow-x-hidden inset-0 overflow-y-auto fixed z-50'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className='relative w-4/6 max-w-xl p-20'>
        <div className='flex flex-col gap-y-4 text-sm'>
          <div>
            <label>이름</label>
            <Input {...register('username')} placeholder='이름' type='text' />
          </div>
          <div>
            <label>이메일</label>
            <Input {...register('email')} placeholder='이메일' type='email' />
          </div>
          <Button type='submit'>확인</Button>
        </div>
      </Card>
    </form>
  );
}
