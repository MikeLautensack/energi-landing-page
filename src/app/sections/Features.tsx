import React from "react";
import { fourPillars } from "../utils/utils";
import Pillar from "../components/Pillar";
import Image from "next/image";

const Features = () => {
  return (
    <section
      id="features-section"
      className="px-3 md:px-8 lg:px-[120px] flex flex-col items-center bg-features-bg bg-no-repeat bg-cover bg-right"
    >
      {/**
       * Four Pillars
       */}
      <div className="w-full flex justify-center">
        <div
          id="four-pillars"
          className="w-full flex flex-col items-start lg:items-end gap-4 md:gap-6 lg:gap-8 lg:px-[120px] py-16 max-w-[1098px]"
        >
          <div id="four" className="w-full flex flex-col gap-4 max-w-[792px]">
            <h4 className="text-[22px] leading-[26px] text-[#717171]">
              WHAT SUPPORT OUR SYSTEM
            </h4>
            <h2 className="text-[37px] leading-[45px] text-[#FFFFFF]">
              Founded on 4 pillars.
            </h2>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              Unlike other crypto projects, Energi was ingeniously designed on
              Four Pillars with an attractive Masternode incentive model and
              strong Treasury. Energi’s novel Treasury is larger than any other,
              is truly decentralized, and its complementary Masternode network
              votes on how the funds are invested.
            </p>
          </div>
          <div className="w-full flex justify-start lg:justify-end">
            <div className="w-full max-w-[714px] grid grid-cols-4 gap-y-4 gap-x-6 md:grid-cols-8 md:gap-y-6 md:gap-x-8 lg:grid-cols-12">
              {fourPillars.map((pillar) => (
                <Pillar
                  key={pillar.h5}
                  imgSrc={pillar.imgSrc}
                  imgWidth={pillar.imgWidth}
                  imgHeight={pillar.imgHeight}
                  imgAlt={pillar.imgAlt}
                  h5={pillar.h5}
                  p={pillar.p}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/**
       * Backed by NRG
       */}
      <div
        id="backed-by-nrg"
        className="py-16 lg:py-[120px] flex justify-center items-center lg:items-end lg:justify-end gap-6 md:max-w-[506px] lg:max-w-[1098px] w-full"
      >
        <div
          id="wrapper"
          className="flex flex-col w-full gap-6 lg:max-w-[792px] lg:min-w-[384px]"
        >
          <div className="flex flex-col justify-start items-start gap-4">
            <h2 className="text-[37px] leading-[45px] md:text-[45px] md:leading-[54px] lg:text-[54px] lg:leading-[65px] text-[#FFFFFF]">
              Backed by NRG
            </h2>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              Acquiring NRG tokens is easy, straight-forward, and rewarding.
              Everyone has the chance to earn high returns from Farming and
              Liquidity Pools and referral programs by inviting friends.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-start gap-10">
            <button className="w-full md:w-[155px] h-[70px] bg-[#01E676] text-[#212121] font-semibold text-[18px] leading-[22px] rounded-lg">
              Get NRG
            </button>
            <button className="w-full md:w-[333px] h-[70px] text-[#FFFFFF] font-semibold text-[18px] leading-[22px]">
              Trade Crypto On EnergiSwap
            </button>
          </div>
        </div>
      </div>
      {/**
       * Join the blockchain
       */}
      <div id="join-the-blockchain" className="py-16 flex flex-col gap-4">
        <div
          id="text-section"
          className="flex flex-col items-center md:items-start gap-4"
        >
          <h2 className="text-[37px] leading-[45px] md:text-[54px] md:leading-[65px] text-[#FFFFFF]">
            Join the most versatile blockchain ecosystem
          </h2>
          <button className="relative flex justify-center items-center gap-4 w-full md:w-[279px] h-[70px] font-semibold text-[18px] text-[#FFFFFF]">
            <p className="">Powerful Features</p>
            <Image src={"/icons/arrow.png"} alt={""} height={14} width={14} />
          </button>
        </div>

        <div
          id="card-grid"
          className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 md:grid-rows-3"
        >
          {/**
           * Card 1
           */}
          <div className="col-span-4 flex flex-col justify-between items-start bg-[#253237] rounded-2xl p-6 min-h-[588px] md:row-span-2 lg:row-span-3 lg:col-span-5">
            <h5 className="text-[22px] leading-[26px] text-[#01E676]">
              ENERGIZWAP
            </h5>
            <div className="flex flex-col gap-10 justify-start items-start w-full">
              <h3 className="text-[31px] leading-[38px] text-[#FFFFFF]">
                The Most Secure Decentralized Exchange (DEX)
              </h3>
              <p className="text-[18px] leading-[22px] text-[#717171] truncate w-full">
                low fees and fast transaction speed
              </p>
            </div>
          </div>
          <div
            id="subgrid"
            className="grid col-span-4 gap-6 grid-cols-4 md:row-span-3 lg:col-span-7 lg:row-span-3 lg:grid-cols-8"
          >
            {/**
             * Card 2
             */}
            <div className="col-span-4 flex flex-col justify-between items-start bg-[#253237] rounded-2xl p-6 min-h-[282px] lg:col-span-8">
              <h5 className="text-[22px] leading-[26px] text-[#01E676]">
                ENERGI NFT STUDIOS
              </h5>
              <div className="flex flex-col gap-10 justify-start items-start w-full">
                <h3 className="text-[31px] leading-[38px] text-[#FFFFFF]">
                  The NFT creative space of Energi Core exclusive NFT
                  collections
                </h3>
                <p className="text-[18px] leading-[22px] text-[#717171] truncate w-full">
                  playing a positive role in NFTs adoption process
                </p>
              </div>
            </div>
            {/**
             * Card 3
             */}
            <div className="col-span-4 flex flex-col justify-between items-start bg-[#253237] rounded-2xl p-6 min-h-[282px] lg:col-span-4">
              <h5 className="text-[22px] leading-[26px] text-[#01E676]">
                GMI NFT MARKETPLACE
              </h5>
              <div className="flex flex-col gap-10 justify-start items-start w-full">
                <h3 className="text-[31px] leading-[38px] text-[#FFFFFF]">
                  Trade, buy, and store NFT with peace of mind
                </h3>
                <p className="text-[18px] leading-[22px] text-[#717171] truncate w-full">
                  the most secure NFT Marketplace
                </p>
              </div>
            </div>
            {/**
             * Card 4
             */}
            <div className="col-span-4 flex flex-col justify-between items-start bg-[#253237] rounded-2xl p-6 min-h-[282px] lg:col-span-4">
              <h5 className="text-[22px] leading-[26px] text-[#01E676]">
                REFERRAL PROGRAM
              </h5>
              <div className="flex flex-col gap-10 justify-start items-start w-full">
                <h3 className="text-[31px] leading-[38px] text-[#FFFFFF]">
                  Decentralized Referral Program
                </h3>
                <p className="text-[18px] leading-[22px] text-[#717171] truncate w-full">
                  receive rewards and fee discounts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
