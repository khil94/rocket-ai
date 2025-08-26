import { SajuItem } from "@/constants/saju";
import { ReactNode } from "react";
import SajuComp from "./sajuComp";
import SajuText from "./sajuText";

interface props {
  data: SajuItem[];
  className?: string;
}

export default function SajuRows({ className, data }: props) {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <td
        className={`border p-1 border-slate-300 border-b-black bg-white ${className}`}
      >
        {children}
      </td>
    );
  };

  if (!data.length) {
    return (
      <Wrapper>
        <span className="text-[0.5rem]">{"(없음)"}</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {data.map((tt, tti) =>
        tt.type === "text" ? (
          <SajuText key={tt.main + tti} item={tt} />
        ) : (
          <SajuComp key={tt.main + tti} item={tt} />
        )
      )}
    </Wrapper>
  );
}
