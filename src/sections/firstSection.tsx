import { rate } from "@/constants/rate";
import Image from "next/image";
import Mark from "../assets/mark.svg";
import UpCloud from "../assets/up-cloud.svg";

export default function FirstSection() {
  return (
    <div className="relative w-full h-full">
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
      <div className="absolute text-center flex flex-col gap-2 top-1/6 left-1/2 -translate-x-1/2 ">
        <span>제 1장</span>
        <Mark />
        <span>나의 사주 팔자</span>
      </div>
      <Image
        className=""
        src={"/first-img.png"}
        width={rate * 375}
        height={rate * 752}
        alt="first-head"
      />
      <div className="absolute left-5 bottom-0 translate-y-2/3">
        <UpCloud />
      </div>
    </div>
  );
}
