import Image from "next/image";
import React from "react";

const Whitepaper = () => {
  return (
    <section
      id="whitepaper-section"
      className="py-16 px-3 md:px-8 lg:px-[120px] flex justify-center items-center"
    >
      <div className="w-full max-w-[1092px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
        {/**
         * top section
         */}
        <div
          id="whitepaper-top"
          className="flex flex-col gap-10 min-w-[384px] max-w-[612px] col-span-4 md:col-span-5 lg:col-span-8"
        >
          <div className="flex flex-col gap-4">
            <h4 className="text-[22px] leading-[26px] text-[#717171]">
              DECENTRALIZED GOVERNANCE SYSTEM
            </h4>
            <h2 className="text-[37px] md:text-[45px] lg:text-[54px] leading-[45px] md:leading-[54px] lg:leading-[65px] text-left">
              Virtually a no-crime universe of services.
            </h2>
            <p className="text-[18px] leading-[22px] text-left">
              Every day in the Cryptocurrency and NFT blockchain market we are
              seeing massive hacks through many different methods. Energi
              provides users with one-of-a-kind security features.
            </p>
          </div>
          <div className="flex flex-col gap-10 items-center md:items-start">
            <button className="w-full md:w-[182px] h-[70px] border border-[#01E676] text-[#01E676] font-semibold text-[18px] leading-[22px] rounded-lg">
              Whitepaper
            </button>
            <button className="relative flex justify-center items-center gap-4 h-[70px] md:w-[327px]">
              <p className="">Explore Energi Universe</p>
              <Image src={"/icons/arrow.png"} alt={""} height={14} width={14} />
            </button>
          </div>
        </div>
        {/**
         * bottom section
         */}
        <div
          id="whitepaper-bottom"
          className="flex flex-col gap-4 w-full col-span-4 md:col-span-3 lg:col-span-4 items-center md:items-start"
        >
          <div className="flex flex-col gap-4 lg:gap-8 min-w-[204px] max-w-[306px]">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h3 className="text-[45px] lg:text-[85px] leading-[54px] lg:leading-[103px] text-center md:text-left">
                95%+
              </h3>
              <p className="text-[18px] leading-[22px] text-center md:text-left">
                of crime on our blockchain have been stopped
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h3 className="text-[45px] lg:text-[85px] leading-[54px] lg:leading-[103px] text-center md:text-left">
                $1.1m+
              </h3>
              <p className="text-[18px] leading-[22px] text-center md:text-left">
                of assets had been restored by our blockchain protections since
                we launched
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
