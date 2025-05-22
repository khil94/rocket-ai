import { useResponsiveRate } from "@/hooks/useResponsiveRate";
import Mark from "../assets/mark.svg";

interface Props {
  upperText: string;
  lowerText: string;
}

export default function Chapter({ upperText, lowerText }: Props) {
  const rate = useResponsiveRate();
  return (
    <div className="absolute text-center flex flex-col gap-2 top-1/6 left-1/2 -translate-x-1/2">
      <span className="animate-fade-up ">{upperText}</span>
      <Mark width={157 * rate} />
      <span className="animate-fade-up ">{lowerText}</span>
    </div>
  );
}
