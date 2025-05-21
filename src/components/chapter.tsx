import Mark from "../assets/mark.svg";

interface Props {
  upperText: string;
  lowerText: string;
}

export default function Chapter({ upperText, lowerText }: Props) {
  return (
    <div className="absolute text-center flex flex-col gap-2 top-1/6 left-1/2 -translate-x-1/2">
      <span className="animate-fade-up ">{upperText}</span>
      <Mark />
      <span className="animate-fade-up ">{lowerText}</span>
    </div>
  );
}
