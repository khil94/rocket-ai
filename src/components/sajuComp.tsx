import { SajuItem } from "@/constants/saju";

interface props {
  item: SajuItem;
}

export default function SajuComp({ item }: props) {
  const compColor =
    item.color === "bg-light-white"
      ? "text-black border border-black"
      : "text-white";
  return (
    <div className={`${item.color} p-1 flex flex-col rounded-xl ${compColor}`}>
      <p className="text-[0.5rem]">{item.sub}</p>
      <span className="text-2xl">{item.main}</span>
      <span className="text-[0.5rem]">{item.sub2}</span>
    </div>
  );
}
