import { Dialog } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';

export default function Grid() {
  return (
    <div className='grid grid-cols-5'>
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
    </div>
  );
}
