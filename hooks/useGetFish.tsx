import getAllFish from '@/app/actions/getAllFish';
import getLikes from '@/app/actions/getLikes';
import { useQuery } from '@tanstack/react-query';

type FishProps = {
  id: string;
  likes: string[];
  name: string;
}[];

export default function useGetFish() {
  const useGetTop3 = () => {
    return useQuery<FishProps>({
      queryKey: ['fish', 'top3'],
      queryFn: async () => getLikes(),
    });
  };

  return { useGetTop3 };
}
