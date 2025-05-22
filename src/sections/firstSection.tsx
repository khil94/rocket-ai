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
        <div className="relative">
          <UpCloud width={215 * rate} />
          <div className="absolute inset-0 top-1/8 text-black flex items-center justify-center">
            <p className="text-xs max-w-3/5 ssm:text-sm text-center break-keep leading-snug">
              이제 본격적으로 ㅇㅇ님의 사주팔자를 분석해볼 차례네요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
