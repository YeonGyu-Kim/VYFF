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
      {rank.map((item) => (
        <>
          <div>{item.name}</div>
          <div>{item.likes.length}</div>
        </>
      ))}
    </div>
  );
}
