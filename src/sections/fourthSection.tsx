import SajuTable from "@/components/sajuTable";
import { SAJU_DATA } from "@/constants/saju";

export default function FourthSection() {
  const userName = "김로켓";
  const userBirthDay = "1980년 8월27일 08:10";
  return (
    <section className="px-3 pb-20 -mt-15">
      <div
        className="relative w-full h-[39rem] pt-10 px-5 pb-8
      gap-6 flex flex-col bg-center bg-no-repeat bg-cover 
      bg-[url(/saju-wrapper.webp)]"
      >
        <div className="flex flex-col gap-3 items-center">
          <h2>{`${userName}님의 사주`}</h2>
          <h2 className="font-bold text-xl">{`${userBirthDay}`}</h2>
        </div>
        <div className="h-full flex items-center justify-center">
          <SajuTable data={SAJU_DATA} />
        </div>
      </div>
    </section>
  );
}
