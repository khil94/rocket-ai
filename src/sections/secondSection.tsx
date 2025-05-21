import Image from "next/image";

export default function SecondSection() {
  return (
    <div className="relative w-full h-full">
      <div className="flex justify-end">
        <Image src={"/cloud.png"} width={153} height={120} alt="cloud" />
        <Image
          className="mr-8"
          src={"/second.jpg"}
          width={120}
          height={285}
          alt="second"
        />
      </div>
    </div>
  );
}
