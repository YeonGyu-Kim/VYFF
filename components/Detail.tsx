import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Detail() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>그림이름</DialogTitle>
        <DialogDescription>그림정보</DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
