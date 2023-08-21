interface WeightsProps {
  category: string;
  score: number;
}

const textCategoryColorMappings: { [key: string]: string } = {
  Reaction: "text-[#d56c6c]",
  Memory: "text-[#fecb6c]",
  Verbal: "text-[#45bb9d]",
  Visual: "text-[#2d3480]",
};

const textBackgroundColorMappings: { [key: string]: string } = {
    Reaction: "bg-[#fff6f5]",
    Memory: "bg-[#fffbf2]",
    Verbal: "bg-[#f2fafa]",
    Visual: "bg-[#f3f3fd]",
  };

const iconMapping: { [key: string]: string } = {
    Reaction: "./src/assets/images/icon-reaction.svg",
    Memory: "./src/assets/images/icon-memory.svg",
    Verbal: "./src/assets/images/icon-verbal.svg",
    Visual: "./src/assets/images/icon-visual.svg"
}

export const Weights = ({ category, score }: WeightsProps) => {
  const textCategoryColor = textCategoryColorMappings[category] || "text-gray-500";
  const textBackgroundColor = textBackgroundColorMappings[category] || "text-gray-500";
  const Icons = iconMapping[category];

  return (
    <div className="weights">
      <div className={`reaction p-5 flex justify-between items-center ${textBackgroundColor} gap-2 h-14 mx-7 md:mx-0 mt-5 rounded-xl`}>
        <div className={`flex gap-2 ${textCategoryColor}`}>
          <img src={Icons} alt="image-icon" />
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
