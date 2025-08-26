import { SajuItem } from "@/constants/saju";

interface props {
  item: SajuItem;
}

export default function SajuText({ item }: props) {
  return (
    <div className="flex flex-col">
      <span className="text-sm">{item.main}</span>
      <span className="text-[0.6rem]">{`(${item.sub})`}</span>
    </div>
  );
}
