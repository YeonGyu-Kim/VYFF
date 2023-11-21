import Image from 'next/image';

export default function MainPage() {
  return (
    <div className='grid place-content-center grid-cols-5 grid-rows-9 h-[100dvh]'>
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
    </div>
  );
}
