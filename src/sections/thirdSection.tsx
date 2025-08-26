import Image from "next/image";

export default function ThirdSection() {
  const dynamicBubbleText = "제가 00님의 사주를\n보기 쉽게 표로 정리했어요";
  return (
    <section className="w-full">
      <div className="relative">
        <div className="absolute w-[75%] left-0 -top-[41%]">
          <Image
            src={"/down-bubble.png"}
            width={215}
            height={139}
            className="w-full"
            alt="up bubble"
          />
          <div className="absolute inset-0 -top-5 flex items-center justify-center p-2 text-center text-black">
            <p className="leading-tight whitespace-pre-line">
              {dynamicBubbleText}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-t from-gradient-white to-transparent w-full h-[25%] absolute -bottom-0" />
        <Image
          src={"/section-3.webp"}
          width={750}
          height={1304}
          priority
          className="w-full h-auto object-fit"
          alt="section-image"
        />
      </div>
    </section>
  );
}
