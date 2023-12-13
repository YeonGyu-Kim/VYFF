export default function Notice() {
  return (
    <div className='pb-3'>
      <div className='mb-4'>[안내 사항]</div>
      <div className='flex flex-col gap-4'>
        <span>
          1. 당신의 마음을 사로잡은 생선의 번호를 입력하고, 투표하세요!
        </span>
        <span>
          2. 당신이 투표한 생선이 1등을 차지하면, 훗날 그는 생명을 얻게 됩니다!
        </span>
        {/*  <span>
          3. 개인정보 입력이 부정확할 시, 생선의 소식을 접하는데 불이익이 있을
          수 있습니다.
        </span> */}
      </div>
    </div>
  );
}
