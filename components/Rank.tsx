'use client';

import useGetFish from '@/hooks/useGetFish';
import Image from 'next/image';
import { Card } from './ui/card';

export default function Rank({ currentUser }: any) {
  const { useGetTop3, useGetAllFish, useGetTotalCount } = useGetFish();
  const { data: top3 } = useGetTop3();
  const { data: voteAll } = useGetTotalCount();
  const { data: detail } = useGetAllFish();

  if (!top3 || !voteAll || !detail) {
    return;
  }

  const calcPercentage = (count: number, whole: number) => {
    const isFloor = ((count / whole) * 100).toString().includes('.');
    return isFloor ? ((count / whole) * 100).toFixed(1) : (count / whole) * 100;
  };

  console.log(top3, voteAll, detail);

  return (
    <div className='flex flex-col items-center w-full gap-6'>
      <Card className='space-y-2 py-6 px-8'>
        <div className='text-center pb-2'>내가 투표한 생선</div>
        <div className='flex gap-3'>
          <Image
            width={100}
            height={100}
            alt={`fish${currentUser.voted_num}`}
            src={`/images/${currentUser.voted_num}.jpg`}
          />
          <div className='flex flex-col gap-2'>
            <span>{`${currentUser.voted_num}번 생선`}</span>
            <div>
              <span>{`${detail.likes.length}표`}</span>
              <span>
                {detail.likes.length > 0
                  ? ` / ${calcPercentage(
                      detail.likes.length,
                      voteAll[0].vote_all.length
                    )}%`
                  : null}
              </span>
            </div>
          </div>
        </div>
      </Card>
      <Card className='space-y-2 py-6 px-8'>
        <div className='text-center pb-2'>투표현황</div>
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
                </div>
                <span>{`${item.name}번 생선`}</span>
                <div>
                  <span>{`${item.likes.length}표`}</span>
                  <span>
                    {item.likes.length > 0
                      ? ` / ${calcPercentage(
                          item.likes.length,
                          voteAll[0].vote_all.length
                        )}%`
                      : null}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
