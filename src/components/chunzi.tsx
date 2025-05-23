import { ISazuCHUNJI } from "@/constants/sazuMockup";

interface prop {
  target: ISazuCHUNJI;
  num: number;
}

export default function ChunZi({ target, num }: prop) {
  const colorList = [
    "bg-[#2f2f2f] text-white",
    "bg-[#c23030] text-white",
    "bg-[#18868c] text-white",
    "bg-white text-black border-black border-1",
  ];
  const targetColor = colorList[num % colorList.length];
  return (
    <div
      className={`${targetColor} aspect-square w-full flex flex-col justify-center rounded-2xl`}
    >
      <span className=" ssm:text-xs text-[2vw]">{target.translation}</span>
      <span className="ssm:text-2xl text-[5vw] font-bold">{target.name}</span>
      <span className=" ssm:text-xs text-[2vw]">{target.subName}</span>
    </div>
  );
}
