import Rank from '@/components/Rank';
import getLikes from '../actions/getLikes';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import getCurrentUser from '../actions/getCurrentUser';
import getAllFish from '../actions/getAllFish';

export default async function Page() {
  const currentUser = await getCurrentUser();
  const detail = await getAllFish();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['fish', 'top3'],
    queryFn: () => getLikes(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className='flex flex-col gap-6 py-8'>
        <div className='text-4xl font-semibold flex flex-col items-center gap-2 text-yellow'>
          <span>투표가</span>
          <span>완료되었습니다!</span>
        </div>
        <div className='flex flex-col text-lg font-medium text-center'>
          <span>당신이 선택한 생선의 소식을</span>
          <span>메일을 통해 확인해보세요!</span>
        </div>
        <Rank currentUser={currentUser} detail={detail} />
      </section>
    </HydrationBoundary>
  );
}
