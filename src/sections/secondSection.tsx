import { useResponsiveRate } from "@/hooks/useResponsiveRate";
import Image from "next/image";

export default function SecondSection() {
  const rate = useResponsiveRate();
  return (
    <div className="relative w-full h-full mb-10">
      <Image
        className="absolute bottom-1/10 left-0 opacity-[80%]"
        src={"/cloud.png"}
        width={153 * rate}
        height={120 * rate}
        alt="cloud"
      />
      <div className="relative flex justify-end">
        <Image
          className="mr-8"
          src={"/second.png"}
          width={161 * rate}
          height={285 * rate}
          alt="second"
        />
      </div>
    </div>
  );
}
