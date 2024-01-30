'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';

type NoticeProps = {
  open: any;
  setOpen: any;
};

export default function Notice({ open, setOpen }: NoticeProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className='text-base break-keep'>
            <i>
              드넓은 잡음의 바다. <br />
              그곳에서 창조주의 단어로 <br />
              탄생한 54마리의 생선들.
              <br />
              <br />
              그들은 매력적이지만,
              <br />
              아직 죽어있는 존재입니다.
              <br />
              <br />
              당신의 마음을 사로잡은 생선은 무엇인가요? <br />
              <br />
              당신의 손으로 생선을 선택하고,
              <br /> 그들의 존재에 영혼을 더해주세요.
              <br />
              <br />
              혹시 모르죠, 당신의 선택으로 그들이 생명을 얻을지도요..! <br />
              <br />
              자, 그럼 당신의 생선에게 투표하세요! <br />
              당신이 선택한 생선의 미래에 희망이 있기를.
            </i>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
