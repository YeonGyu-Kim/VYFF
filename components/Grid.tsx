import Image from 'next/image';

export default function Grid() {
  return (
    <>
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
      <Image alt='fish' src='/images/fish1.png' width={100} height={100} />
    </>
  );
}
