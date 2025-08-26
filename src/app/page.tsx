import FirstSection from "@/sections/firstSection";
import SecondSection from "@/sections/secondSection";
import ThirdSection from "@/sections/thirdSection";

export default function Home() {
  return (
    <div className="h-full w-full gap-10 flex flex-col">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
