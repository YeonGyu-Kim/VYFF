import getLikes from '@/app/actions/getLikes';
import { useQuery } from '@tanstack/react-query';

type useTop3Props = {
  id: string;
  likes: string[];
  name: string;
}[];

export default function useGetLikes() {
  const useTop3 = () => {
    return useQuery<useTop3Props>({
      queryKey: ['top3'],
      queryFn: async () => getLikes(),
    });
  };

  return { useTop3 };
}
