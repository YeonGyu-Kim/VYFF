export default function Notice() {
  return (
    <div className='pb-8'>
      <div className='mb-4'>[안내 사항]</div>
      <div className='flex flex-col gap-4'>
        <span>1. QR코드를 스캔하세요.</span>
        <span>2. 생선의 비밀스럽고 매력적인 정보를 파악하세요.</span>
        <span>3. 당신의 마음에 든 생선에게 투표하세요.</span>
        <span>
          4. 당신이 투표한 생선이 1등을 차지한다면, 그 생선은 당신의 소유가
          됩니다!
        </span>
        <span>
          5. 모든 투표 현황은 비공개로 진행됩니다. 그러니 정말 마음에 드는
          생선에게 투표하세요.
        </span>
        <span>
          6. 개인정보 기재가 불명확할 시 생선의 배송에 있어 차질이 생길 수
          있습니다.
        </span>
      </div>
    </div>
  );
}
