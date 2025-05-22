import { useEffect, useState } from "react";

export function useResponsiveRate(baseWidth = 375) {
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const updateRate = () => {
      const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      const targetWidth = width > 448 ? 448 : width;
      setRate(targetWidth / baseWidth);
    };

    updateRate(); // 초기 실행
    window.addEventListener("resize", updateRate); // 리사이즈 대응
    return () => window.removeEventListener("resize", updateRate);
  }, [baseWidth]);

  return rate;
}
