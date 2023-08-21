interface WeightsProps {
  category: string;
  score: number;
  icon: string;
}

export const Weights = ({ icon, category, score }: WeightsProps) => {
  return (
    <div className="weights">
      <div className="reaction p-5 flex justify-between items-center bg-[#fff6f5] gap-2 h-14 mx-7 md:mx-0 mt-5 rounded">
        <div className="flex gap-2 text-[#ef8383]">
          <img src={icon} alt="image-icon" />
          <span className="font-semibold">{category}</span>
        </div>
        <div>
          <span className="font-semibold text-[#2f3044]">{score} </span>
          <span className="font-semibold text-[#9a97a0]">/ 100</span>
        </div>
      </div>
    </div>
  );
};
