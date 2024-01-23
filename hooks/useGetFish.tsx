import getLikes from '@/app/actions/getLikes';
import { useQuery } from '@tanstack/react-query';

type FishProps = {
  id: string;
  likes: string[];
  name: string;
}[];

export default function useGetFish() {
  const useGetAll = () => {
    return useQuery<FishProps>({
      queryKey: ['all'],
      queryFn: async () => getLikes(),
    });
  };

  const useGetTop3 = () => {
    return useQuery<FishProps>({
      queryKey: ['top3'],
      queryFn: async () => getLikes(),
    });
  };

  return { useGetAll, useGetTop3 };
}
