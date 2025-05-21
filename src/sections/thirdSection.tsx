import { rate } from "@/constants/rate";
import Image from "next/image";
import DownCloud from "../assets/down-cloud.svg";

export default function ThirdSection() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: "30%",
            background: "linear-gradient(to top, #F5F5F5, rgba(255,255,255,0))",
          }}
        />
      </div>
      <div className="absolute left-5 -top-30 ">
        <DownCloud />
      </div>
      <Image
        src={"/third.png"}
        width={375 * rate}
        height={306 * rate}
        alt="third"
      />
    </div>
  );
}
