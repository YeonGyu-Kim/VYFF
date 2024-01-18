type RankProp = {
  rank: {
    id: string;
    name: string;
    likes: string[];
  }[];
};

export default function Rank({ rank }: RankProp) {
  console.log(rank);

  return (
    <div>
      {rank.map((item, index) => (
        <div key={`${item}-${index}`} className='flex gap-4'>
          <div>
            <span>{`${index + 1}위 `}</span>
            <span>{item.name}</span>
          </div>
          <div>{`${item.likes.length}표`}</div>
        </div>
      ))}
    </div>
  );
}
