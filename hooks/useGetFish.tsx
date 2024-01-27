import getAllFish from '@/app/actions/getAllFish';
import getLikes from '@/app/actions/getLikes';
import getTotalCount from '@/app/actions/getTotalCount';
import { useQuery } from '@tanstack/react-query';

type FishProps = {
  id: string;
  likes: string[];
  name: string;
}[];

type VoteAllProps = {
  id: string;
  vote_all: string[];
}[];

export default function useGetFish() {
  const useGetTop3 = () => {
    return useQuery<FishProps>({
      queryKey: ['fish', 'top3'],
      queryFn: async () => getLikes(),
    });
  };

  const useGetVoteAll = () => {
    return useQuery<VoteAllProps>({
      queryKey: ['fish', 'all'],
      queryFn: async () => getTotalCount(),
    });
  };

  return { useGetTop3, useGetVoteAll };
}
