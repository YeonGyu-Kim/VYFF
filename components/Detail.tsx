import { DialogContent, DialogDescription } from '@/components/ui/dialog';
import { Button } from './ui/button';
import addLikes from '@/app/actions/addLikes';
import getFishDetail from '@/app/actions/getFishDetail';

export default async function Detail({ id }: { id: string }) {
  const detail = await getFishDetail(id);

  const handleBtn = async () => {
    await addLikes('6570931d3b1edda598ecb5bb');
  };

  if (!detail) {
    return;
  }

  console.log(detail);

  return (
    <div>
      <DialogContent>
        <DialogDescription>{`이름: ${detail?.name}`}</DialogDescription>
        <DialogDescription>{`성별: ${detail?.gender}`}</DialogDescription>
        <DialogDescription>{`서식지: ${detail?.habitat}`}</DialogDescription>
        <DialogDescription>{`특징: ${detail?.feature}`}</DialogDescription>
        {/* <div onClick={handleBtn}>
        <Button>투표하기</Button>
      </div> */}
      </DialogContent>
    </div>
  );
}
