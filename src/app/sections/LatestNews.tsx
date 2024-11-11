import React from "react";
import Image from "next/image";

const LatestNews = () => {
  return (
    <section
      id="latest-news"
      className="py-16 px-3 md:px-8 lg:px-[120px] flex flex-col gap-4 bg-news-bg bg-no-repeat bg-cover bg-center"
    >
      <h2 className="text-[37px] leading-[45px] text-[#FFFFFF] text-center">
        Latest News
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
        <div className="flex flex-col gap-4 col-span-4 justify-between">
          <div className="flex flex-col gap-4">
            <div className="h-[192px] relative">
              <Image src={"/imgs/programmer-img.png"} alt={""} fill />
            </div>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              Recent Security Issues on OpenSea indicate Need for Change
            </p>
            <p className="text-[18px] leading-[22px] text-[#717171]">
              Recent acts of cybercrime on the OpenSea marketplace and Solana
              blockchain are strengthening the argument that users are at
              greater risk than ever, and that the current NFT landscape could
              do better with a security-oriented NFT platform.
            </p>
          </div>
          <button className="w-full md:w-[134px] text-[18px] leading-[22px] text-[#01E676] font-semibold flex justify-center items-center gap-4 h-14">
            <p className="">Read More</p>
            <Image
              src={"/icons/ArrowCircleRight.png"}
              alt={""}
              height={24}
              width={24}
            />
          </button>
        </div>
        <div className="flex flex-col gap-4 col-span-4 justify-between">
          <div className="flex flex-col gap-4">
            <div className="h-[192px] relative">
              <Image src={"/imgs/energi-swap.png"} alt={""} fill />
            </div>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              “Energi Dollar” (USDE) Stablecoin Launches on Energiswap
            </p>
            <p className="text-[18px] leading-[22px] text-[#717171]">
              Energi is making another major announcement to further advance the
              usability and value of the Energi ecosystem to its community of
              users. Right now on Energiswap, traders can take advantage of the
              Energi Dollar (USDE) stablecoin.
            </p>
          </div>
          <button className="w-full md:w-[134px] text-[18px] leading-[22px] text-[#01E676] font-semibold flex justify-center items-center gap-4 h-14">
            <p className="">Read More</p>
            <Image
              src={"/icons/ArrowCircleRight.png"}
              alt={""}
              height={24}
              width={24}
            />
          </button>
        </div>
        <div className="flex flex-col gap-4 col-span-4 md:col-span-8 lg:col-span-4 justify-between">
          <div className="flex flex-col gap-4">
            <div className="h-[192px] relative">
              <Image src={"/imgs/dragon-nft.png"} alt={""} fill />
            </div>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              Energi Announces Whitelist Contest for New Energi Dragons NFT
              Collection!
            </p>
            <p className="text-[18px] leading-[22px] text-[#717171]">
              Energi Announces Whitelist Contest for New Energi Dragons NFT
              Collection! Energi has made several exciting announcements
              recently as part of its ongoing evolution, including the launch of
              the world’s first referral reward program on a decentralized
              exchange, yield farming, and
            </p>
          </div>
          <button className="w-full md:w-[134px] text-[18px] leading-[22px] text-[#01E676] font-semibold flex justify-center items-center gap-4 h-14">
            <p className="">Read More</p>
            <Image
              src={"/icons/ArrowCircleRight.png"}
              alt={""}
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
