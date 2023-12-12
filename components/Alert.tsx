'use client';

import { Button } from './ui/button';
import { DialogContent, DialogDescription } from './ui/dialog';

export default function Alert({ number }: { number: string }) {
  return (
    <DialogContent>
      <DialogDescription>{`${number}번 생선에게 투표 하시겠습니까?`}</DialogDescription>
      <Button>투표하기</Button>
    </DialogContent>
  );
}
