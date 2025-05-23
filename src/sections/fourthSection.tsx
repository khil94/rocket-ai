import SazuTable from "@/components/sazuTable";
import { useResponsiveRate } from "@/hooks/useResponsiveRate";

export default function FourthSection() {
  const rate = useResponsiveRate();
  const name = "김로켓";
  const birth = "1980년 8월27일 08:10";
  return (
    <div
      className={`relative -mt-[5%] w-full h-full flex justify-center
    `}
    >
      <div
        className={`flex flex-col items-center justify-top pt-[15%]
        bg-[url('/fourth_bg.png')] bg-cover gap-[5%] px-[5%]`}
        style={{ width: `${rate * 351}px`, height: `${621 * rate}px` }}
      >
        <div className="flex flex-col text-center gap-[.5vh]">
          <span className="ssm:text-xl text-[4vw]">{name}님의 사주</span>
          <span className="ssm:text-2xl text-[5vw] font-bold">{birth}</span>
        </div>

        <SazuTable />
      </div>
    </div>
  );
}
