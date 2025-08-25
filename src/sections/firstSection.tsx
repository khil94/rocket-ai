import Image from "next/image";

export default function FirstSection() {
  return (
    <section className="w-full h-auto">
      <div className="relative flex justify-center">
        <div className={`flex flex-col absolute items-center w-[46%]`}>
          <h1>제 1장</h1>
          <Image
            src={"/chapter.png"}
            alt="chapter-image"
            width={314}
            height={40}
            className="w-full h-auto"
            priority
          />
          <h1>나의 사주 팔자</h1>
        </div>
        <Image
          src={"/section-1.png"}
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
