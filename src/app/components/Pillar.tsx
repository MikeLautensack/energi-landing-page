import React from "react";
import Image from "next/image";

type PillarProp = {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  h5: string;
  p: string;
};

const Pillar = ({ imgSrc, imgWidth, imgHeight, imgAlt, h5, p }: PillarProp) => {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start justify-start col-span-4 md:col-span-4 lg:col-span-6">
      <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} />
      <h5 className="text-[18px] leading-[22px] text-[#717171] text-center md:text-left">
        {h5}
      </h5>
      <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center md:text-left">
        {p}
      </p>
    </div>
  );
};

export default Pillar;
