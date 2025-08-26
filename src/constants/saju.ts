export const SAJU_COL_LIST = ["時", "日", "月", "年"];

export interface SajuItem {
  type: "text" | "comp";
  main: string;
  sub?: string;
  sub2?: string;
  color?: "bg-cyan" | "bg-red" | "bg-black" | "bg-light-white";
}

export interface SajuCell {
  items: SajuItem[];
}

export interface SajuRow {
  label: string;
  subLabel: string;
  data: SajuCell[];
}

export interface SajuData {
  rows: SajuRow[];
}

export const SAJU_DATA: SajuData = {
  rows: [
    {
      label: "十星",
      subLabel: "십성",
      data: [
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
      ],
    },
    {
      label: "天干",
      subLabel: "천간",
      data: [
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-black",
              sub2: "陽水",
            },
          ],
        },
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-cyan",
              sub2: "陽水",
            },
          ],
        },
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-red",
              sub2: "陽水",
            },
          ],
        },
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-light-white",
              sub2: "陽水",
            },
          ],
        },
      ],
    },
    {
      label: "地支",
      subLabel: "지지",
      data: [
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-black",
              sub2: "陽水",
            },
          ],
        },
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-cyan",
              sub2: "陽水",
            },
          ],
        },
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-red",
              sub2: "陽水",
            },
          ],
        },
        {
          items: [
            {
              type: "comp",
              main: "壬",
              sub: "임",
              color: "bg-light-white",
              sub2: "陽水",
            },
          ],
        },
      ],
    },
    {
      label: "十星",
      subLabel: "십성",
      data: [
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
      ],
    },
    {
      label: "十二運星",
      subLabel: "십이운성",
      data: [
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
      ],
    },
    {
      label: "十二神殺",
      subLabel: "십이신살",
      data: [
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
        {
          items: [{ type: "text", main: "傷官", sub: "상관" }],
        },
      ],
    },
    {
      label: "貴人",
      subLabel: "귀인",
      data: [
        {
          items: [],
        },
        {
          items: [],
        },
        {
          items: [],
        },
        {
          items: [
            { type: "text", main: "傷官", sub: "상관" },
            { type: "text", main: "傷官", sub: "상관" },
            { type: "text", main: "傷官", sub: "상관" },
          ],
        },
      ],
    },
  ],
};
