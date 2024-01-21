'use client';

import useGetLikes from '@/hooks/useGetLikes';
import Image from 'next/image';

export default function Rank() {
  const { useTop3 } = useGetLikes();
  const { data: rank } = useTop3();

  if (!rank) {
    return;
  }

  return (
    <div className='space-y-8'>
      {rank.map((item, index) => (
        <div key={`${item}-${index}`} className='flex gap-4'>
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
  );
}
