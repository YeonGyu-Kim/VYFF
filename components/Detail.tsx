import { DialogContent, DialogDescription } from '@/components/ui/dialog';
import { Button } from './ui/button';
import addLikes from '@/app/actions/addLikes';

export default function Detail() {
  const handleBtn = async () => {
    await addLikes('6570931d3b1edda598ecb5bb');
  };
  return (
    <DialogContent>
      <DialogDescription>이름:</DialogDescription>
      <DialogDescription>성별:</DialogDescription>
      <DialogDescription>서식지:</DialogDescription>
      <DialogDescription>특징:</DialogDescription>
      <div onClick={handleBtn}>
        <Button>투표하기</Button>
      </div>
    </DialogContent>
  );
}
