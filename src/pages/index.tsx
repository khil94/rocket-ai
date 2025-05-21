import FirstSection from "@/sections/firstSection";
import SecondSection from "@/sections/secondSection";
import ThirdSection from "@/sections/thirdSection";

export default function Home() {
  return (
    <div className={` items-center justify-items-center min-h-screen `}>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        {/* <Image src={"/second.jpg"} width={300} height={100} alt="second" /> */}
      </main>
    </div>
  );
}
