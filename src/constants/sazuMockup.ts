export interface ISazu {
  name: string | null;
  translation: string | null;
}

export interface ISazuCHUNJI extends ISazu {
  subName: string;
}

export interface ISazuMockup {
  first_sip_sung: ISazu[];
  chun_gan: ISazuCHUNJI[];
  ji_ji: ISazuCHUNJI[];
  second_sip_sung: ISazu[];
  sip_yee_un_sung: ISazu[];
  sip_yee_sin_sal: ISazu[];
  gui_in: ISazu[];
}

export const SAZU_MOCKUP: ISazuMockup = {
  first_sip_sung: [
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "比肩",
      translation: "비견",
    },
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "傷官",
      translation: "상관",
    },
  ],
  chun_gan: [
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
  ],
  ji_ji: [
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
    {
      name: "壬",
      translation: "임",
      subName: "陽水",
    },
  ],
  second_sip_sung: [
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "比肩",
      translation: "비견",
    },
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "傷官",
      translation: "상관",
    },
  ],
  sip_yee_un_sung: [
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "比肩",
      translation: "비견",
    },
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "傷官",
      translation: "상관",
    },
  ],
  sip_yee_sin_sal: [
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "比肩",
      translation: "비견",
    },
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "傷官",
      translation: "상관",
    },
  ],
  gui_in: [
    {
      name: null,
      translation: null,
    },
    {
      name: null,
      translation: null,
    },
    {
      name: "傷官",
      translation: "상관",
    },
    {
      name: "傷官",
      translation: "상관",
    },
  ],
};
