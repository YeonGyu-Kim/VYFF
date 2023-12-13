import { DialogContent, DialogDescription } from '@/components/ui/dialog';
import { Button } from './ui/button';
import addLikes from '@/app/actions/addLikes';
import getFishDetail from '@/app/actions/getFishDetail';

export default async function Detail({ id }: { id: string }) {
  const detail = await getFishDetail(id);

  if (!detail) {
    return;
  }

  return (
    <div>
      <DialogContent>
        <DialogDescription>{`이름: ${detail?.name}`}</DialogDescription>
        {/* <div onClick={handleBtn}>
        <Button>투표하기</Button>
      </div> */}
      </DialogContent>
    </div>
  );
}
