import FirstSection from "@/sections/firstSection";
import FourthSection from "@/sections/fourthSection";
import SecondSection from "@/sections/secondSection";
import ThirdSection from "@/sections/thirdSection";

export default function Home() {
  return (
    <div className={` min-h-screen `}>
      <main className="flex flex-col row-start-2">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        {/* <Image src={"/second.jpg"} width={300} height={100} alt="second" /> */}
      </main>
    </div>
  );
}
