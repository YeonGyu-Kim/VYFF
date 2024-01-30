import Rank from '@/components/Rank';
import getLikes from '../actions/getLikes';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import getCurrentUser from '../actions/getCurrentUser';
import getAllFish from '../actions/getAllFish';
import getTotalCount from '../actions/getTotalCount';

export default async function Page() {
  const currentUser = await getCurrentUser();
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['fish', 'total'],
      queryFn: getTotalCount,
    }),
    queryClient.prefetchQuery({
      queryKey: ['fish', 'top3'],
      queryFn: getLikes,
    }),
    queryClient.prefetchQuery({
      queryKey: ['fish', 'all'],
      queryFn: getAllFish,
    }),
  ]);

  if (!currentUser) {
    return;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className='flex flex-col gap-6 py-8 overflow-y-scroll'>
        <div className='text-4xl font-semibold flex flex-col items-center gap-2 text-yellow'>
          <span>투표가</span>
          <span>완료되었습니다!</span>
        </div>
        <Rank currentUser={currentUser} />
      </section>
    </HydrationBoundary>
  );
}
