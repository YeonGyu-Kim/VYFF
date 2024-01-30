import getAllFish from '@/app/actions/getAllFish';
import getLikes from '@/app/actions/getLikes';
import getTotalCount from '@/app/actions/getTotalCount';
import { useQuery } from '@tanstack/react-query';

export default function useGetFish() {
  const useGetTop3 = () => {
    return useQuery({
      queryKey: ['fish', 'top3'],
      queryFn: async () => getLikes(),
    });
  };

  const useGetTotalCount = () => {
    return useQuery({
      queryKey: ['fish', 'total'],
      queryFn: async () => getTotalCount(),
    });
  };

  const useGetAllFish = () => {
    return useQuery({
      queryKey: ['fish', 'all'],
      queryFn: async () => getAllFish(),
    });
  };

  return { useGetTop3, useGetTotalCount, useGetAllFish };
}
