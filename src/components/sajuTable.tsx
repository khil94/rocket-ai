import { SAJU_COL_LIST, SajuData } from "@/constants/saju";
import SajuRows from "./sajuRows";

interface props {
  data: SajuData;
}

export default function SajuTable({ data }: props) {
  return (
    <table className="table-fixed w-full h-full text-center border-collapse break-words">
      <thead className="">
        <tr>
          <th className="border-b"></th>
          {SAJU_COL_LIST.map((v, i) => (
            <th
              key={v + i}
              className={`text-xl p-4 border-t-0 border border-slate-300 border-b-black
                ${
                  i === 0
                    ? "border-l-black"
                    : i === SAJU_COL_LIST.length - 1
                    ? "border-r-black"
                    : ""
                }
                `}
            >
              {v}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((v, i) => {
          return (
            <tr key={"saju-rows-" + v.label + i}>
              <th
                scope="row"
                className={`py-1.5 h-full border-l-0 border-r border-b bg-none
                  ${i === 1 && "border-b-slate-300"}
                  `}
              >
                <div className="flex flex-col">
                  <span className="text-xs">{v.label}</span>
                  <span className="text-[0.5rem]">{`(${v.subLabel})`}</span>
                </div>
              </th>
              {v.data.map((t, ti) => {
                return (
                  <SajuRows
                    className={`
                  ${ti === v.data.length - 1 && "border-r-black"}
                  ${i === 1 && "border-b-0"}
                  `}
                    key={t.items.length + ti}
                    data={t.items}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
