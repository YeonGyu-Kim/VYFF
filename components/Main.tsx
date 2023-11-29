import Image from 'next/image';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Detail from './Detail';
import Grid from './Grid';

export default function MainPage() {
  return (
    <div className='flex justify-center'>
      <Dialog>
        <DialogTrigger>
          <div className='grid grid-cols-5'>
            <Grid />
          </div>
        </DialogTrigger>
        <Detail />
      </Dialog>
    </div>
  );
}
