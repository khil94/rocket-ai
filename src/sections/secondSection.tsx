import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="w-full pt-[4.5rem]">
      <div className="w-full flex flex-row [&_img]:min-w-0 gap-9">
        <div className="pb-9 relative content-end shrink-0 w-[41%]">
          <Image
            src={"/cloud.png"}
            width={306}
            height={240}
            className="w-full h-auto object-contain"
            alt="cloud-image"
          />
        </div>
        <div className=" w-full relative pl-10 pr-5">
          <Image
            src={"/sksk.webp"}
            width={355}
            height={268}
            className="absolute top-[7%] left-0 w-[38%] h-auto"
            alt="section-2-image"
          />
          <Image
            src={"/section-2.webp"}
            width={480}
            height={1140}
            className="w-full h-auto"
            alt="section-2-image"
          />
        </div>
      </div>
    </section>
  );
}
