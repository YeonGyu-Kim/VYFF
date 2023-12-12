export default function Page() {
  return (
    <section className='flex justify-center flex-col items-center h-[100dvh] gap-10'>
      <div className='text-4xl font-semibold flex flex-col items-center gap-2'>
        <span>투표가</span>
        <span>완료되었습니다!</span>
      </div>
      <div className='flex flex-col text-lg font-medium'>
        <span>당신이 선택한 생선의 소식을</span>
        <span>메일을 통해 확인해보세요!</span>
      </div>
    </section>
  );
}
