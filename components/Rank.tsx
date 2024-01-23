'use client';

import useGetFish from '@/hooks/useGetFish';
import Image from 'next/image';
import { Card } from './ui/card';

export default function Rank({ currentUser }: any) {
  const { useGetAll, useGetTop3 } = useGetFish();
  const { data: top3 } = useGetTop3();
  const { data: all } = useGetAll();

  if (!top3 || !all) {
    return;
  }

  const votedFish = all.find((item) => item.name === currentUser.voted_num);
  console.log(all);

  return (
    <div className='flex flex-col items-center w-full gap-6'>
      <Card className='space-y-2 py-4 px-8'>
        <div className='text-center'>내가 투표한 생선</div>
        <div className='flex gap-3'>
          <Image
            width={100}
            height={100}
            alt={`fish${currentUser.voted_num}`}
            src={`/images/${currentUser.voted_num}.jpg`}
          />
          <div className='flex flex-col gap-2'>
            <span>{`${currentUser.voted_num}번 생선`}</span>
            <span> {`${votedFish?.likes.length}표`}</span>
          </div>
        </div>
      </Card>
      <Card className='space-y-2 py-4 px-8'>
        <div className='text-center'>투표현황</div>
        <div className='flex flex-col gap-8'>
          {top3.map((item, index) => (
            <div key={`${item}-${index}`} className='flex gap-3'>
              <Image
                width={100}
                height={100}
                alt={`fish${index + 1}`}
                src={`/images/${item.name}.jpg`}
              />

              <div className='flex flex-col justify-center gap-2'>
                <div>
                  <span className='text-3xl'>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </span>
                  {/*  <span>{` ${index + 1}위 `}</span> */}
                </div>
                <span>{`${item.name}번 생선`}</span>
                <span> {`${item.likes.length}표`}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
