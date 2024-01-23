'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from './ui/card';
import addUser from '@/app/actions/addUser';
import Notice from './Notice';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Error from './Error';
import { PuffLoader } from 'react-spinners';

const userSchema = z.object({
  username: z.string().min(1, '이름을 입력해주세요.'),
  email: z
    .string()
    .min(1, '이메일을 입력해주세요.')
    .email('잘못된 유형의 이메일 주소입니다.'),
});

export type UserSchema = z.infer<typeof userSchema>;

export default function UserForm({ currentUser }: any) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserSchema) => {
    if (currentUser) {
      signIn('credentials', {
        ...data,
        redirect: false,
      });
      router.refresh();
    } else {
      const user = await addUser(data);

      if (user) {
        const userData = {
          username: user.username,
          email: user.email,
        };
        signIn('credentials', {
          ...userData,
          redirect: true,
        }).then(() => <PuffLoader size={100} color='red' />);
      }
    }
  };

  return (
    <form
      className='flex justify-center items-center overflow-x-hidden inset-0 overflow-y-auto fixed z-50'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className='relative px-8 py-12 mx-4'>
        <div className='flex flex-col gap-y-4 text-md'>
          <div>[안내 사항]</div>
          <div className='mb-6'>
            개인정보 입력이 부정확할 시, 생선의 소식을 접하는데 불이익이 있을 수
            있습니다.
          </div>
          <div>
            <label>이름</label>
            <Input {...register('username')} placeholder='이름' />
            {errors.username && <Error>{errors.username.message}</Error>}
          </div>
          <div>
            <label>이메일</label>
            <Input {...register('email')} placeholder='이메일' />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>
          <Button className='mt-2' type='submit'>
            확인
          </Button>
        </div>
      </Card>
    </form>
  );
}
