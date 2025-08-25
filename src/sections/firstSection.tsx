import Image from "next/image";

export default function FirstSection() {
  const dynamicBubbleText =
    "이제 본격적으로\n00님의 사주팔자를\n분석해볼 차례네요.";
  return (
    <section className="w-full h-auto">
      <div className="relative w-full h-fit flex justify-center">
        <div
          className={`flex flex-col absolute items-center z-10 text-white gap-3 top-[13%] w-[42%] fluid-gap-12`}
        >
          <h1>제 1장</h1>
          <Image
            src={"/chapter.png"}
            alt="chapter-image"
            width={314}
            height={0}
            className="w-full h-auto"
            priority
          />
          <h1>나의 사주 팔자</h1>
        </div>
        <div className="bg-gradient-to-b from-black to-transparent w-full h-[34%] absolute" />
        <div className="bg-gradient-to-t from-gradient-white to-transparent w-full h-[26%] absolute -bottom-0" />
        <Image
          src={"/section-1.png"}
          width={750}
          height={1304}
          priority
          className="w-full h-auto object-fit"
          alt="section-image"
        />
        <div className="absolute w-[68%] left-0 -bottom-[19%]">
          <Image
            src={"/up-bubble.png"}
            width={215}
            height={139}
            className="w-full"
            alt="up bubble"
          />
          <div className="absolute inset-0 top-5 flex items-center justify-center p-2 text-center text-black">
            <p className="leading-tight whitespace-pre-line">
              {dynamicBubbleText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
