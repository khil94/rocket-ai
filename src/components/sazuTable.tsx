import { SAZU_MOCKUP } from "@/constants/sazuMockup";
import ChunZi from "./chunzi";

export default function SazuTable() {
  function TD({ up, down }: { up: string | null; down: string | null }) {
    if (up && down) {
      return (
        <td>
          <div className="flex flex-col break-keep">
            <span className="ssm:text-lg text-[4vw]">{up}</span>
            <span className="ssm:text-xs text-[3vw]">{`(${down})`}</span>
          </div>
        </td>
      );
    }
    return (
      <td>
        <span className="ssm:text-xs text-[3vw]">(없음)</span>
      </td>
    );
  }

  function TH({ up, down }: { up: string; down: string }) {
    return (
      <td>
        <div className="flex flex-col break-keep items-center px-[1%]">
          <span className="ssm:text-sm text-[3vw]">{up}</span>
          <span className="ssm:text-xs text-[2vw]">{`(${down})`}</span>
        </div>
      </td>
    );
  }

  return (
    <table
      className={`
      text-center border-r-1 border-b-1 

      [&_td]:border-r-[.5px] [&_td]:first:bg-transparent [&_td]:bg-white
      [&_th]:ssm:text-xl [&_th]:text-[4vw]
      [&_tr,&_thead]:border-b-1 
      [&_th,&_td]:border-r-[.5px] [&_th,&_td]:border-r-[#8A8A8A]
    [&_th,&_td]:first:border-black [&_th,&_td]:first:border-r-1
      [&_th,&_td]:p-[1%] [&_tr]:h-0 
    `}
    >
      <colgroup>
        <col width={"15%"} />
        <col width={"21%"} />
        <col width={"21%"} />
        <col width={"21%"} />
        <col width={"21%"} />
      </colgroup>
      <thead className={``}>
        <tr>
          <th></th>
          <th>時</th>
          <th>日</th>
          <th>月</th>
          <th>年</th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <TH up={"十星"} down={"십성"} />
          {SAZU_MOCKUP.first_sip_sung.map((v, i) => (
            <TD key={`${v.name}+${i}`} up={v.name} down={v.translation} />
          ))}
        </tr>
        <tr className="border-b-[.5px]! border-b-[#8A8A8A]!">
          <TH up={"天干"} down={"천간"} />
          {SAZU_MOCKUP.chun_gan.map((v, i) => (
            <td className="p-[1%]" key={`${v.name}+${i}`}>
              <ChunZi target={v} num={i} />
            </td>
          ))}
        </tr>
        <tr>
          <TH up={"地支"} down={"지지"} />
          {SAZU_MOCKUP.chun_gan.map((v, i) => (
            <td className="p-[1%]" key={`${v.name}+${i}`}>
              <ChunZi target={v} num={i} />
            </td>
          ))}
        </tr>
        <tr>
          <TH up={"十星"} down={"십성"} />
          {SAZU_MOCKUP.second_sip_sung.map((v, i) => (
            <TD key={`${v.name}+${i}`} up={v.name} down={v.translation} />
          ))}
        </tr>
        <tr>
          <TH up={"十二運星"} down={"십이운성"} />
          {SAZU_MOCKUP.sip_yee_un_sung.map((v, i) => (
            <TD key={`${v.name}+${i}`} up={v.name} down={v.translation} />
          ))}
        </tr>
        <tr>
          <TH up={"十二神殺"} down={"십이신살"} />
          {SAZU_MOCKUP.sip_yee_sin_sal.map((v, i) => (
            <TD key={`${v.name}+${i}`} up={v.name} down={v.translation} />
          ))}
        </tr>
        <tr>
          <TH up={"貴人"} down={"귀인"} />
          {SAZU_MOCKUP.gui_in.map((v, i) => (
            <TD key={`${v.name}+${i}`} up={v.name} down={v.translation} />
          ))}
        </tr>
      </tbody>
    </table>
  );
}
