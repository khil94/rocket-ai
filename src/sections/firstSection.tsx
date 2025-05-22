import Chapter from "@/components/chapter";
import { useResponsiveRate } from "@/hooks/useResponsiveRate";
import Image from "next/image";
import UpCloud from "../assets/up-cloud.svg";

export default function FirstSection() {
  const rate = useResponsiveRate();
  return (
    <div className="relative w-full h-full mb-[30%]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: "30%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: "20%",
            background: "linear-gradient(to top, #F5F5F5, rgba(255,255,255,0))",
          }}
        />
      </div>
      <Chapter upperText="제 1장" lowerText="나의 사주 팔자" />
      <Image
        className=""
        src={"/first-img.png"}
        width={rate * 375}
        height={rate * 752}
        alt="first-head"
      />
      <div className="absolute left-1/50 bottom-0 translate-y-2/3">
        <UpCloud width={239 * rate} />
      </div>
    </div>
  );
}
