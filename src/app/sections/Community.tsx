import React from "react";
import Image from "next/image";

const Community = () => {
  return (
    <section className="px-3 md:px-8 lg:px-[120px] py-16 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
      <div className="flex flex-col gap-4 col-span-4 md:col-span-8 lg:col-span-7">
        <h5 className="text-[22px] leading-[26px] text-[#717171]">
          OUR FUNDAMENTAL VALUE
        </h5>
        <h2 className="text-[37px] leading-[45px] md:text-[54px] md:leading-[65px] text-[#FFFFFF]">
          Meet the Worldwide Community
        </h2>
        <div className="flex flex-col gap-[22px] justify-start items-center">
          <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
            Our Twitter Spaces and Discord Channels encourage our community to
            meet new people, be heard and have fun.
          </p>
          <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
            In these spaces you can be part of conversations and collaborations
            on Crypto, NFTs, and the latest emerging trends in Web3, and
            Metaverse.
          </p>
          <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
            All of our spaces help provide the advanced information and
            community engagement that makes Energi the best Cryptocurrency in
            the world. A community you can be proud to be a part of!
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-4 col-span-4 md:col-span-8 lg:col-span-5">
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-start items-start px-6 py-4">
            <Image
              src={"/icons/TelegramLogo.png"}
              alt={""}
              height={24}
              width={24}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <button className="relative flex justify-center items-center gap-4 h-14">
              <p className="text-[18px] leading-[22px] font-semibold text-[#FFFFFF]">
                Community Chat
              </p>
              <Image src={"/icons/arrow.png"} alt={""} height={14} width={14} />
            </button>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-start items-start px-6 py-4">
            <Image
              src={"/icons/TwitterLogo.png"}
              alt={""}
              height={24}
              width={24}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <button className="relative flex justify-center items-center gap-4 h-14">
              <p className="">Twitter</p>
              <Image src={"/icons/arrow.png"} alt={""} height={14} width={14} />
            </button>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-start items-start px-6 py-4">
            <Image
              src={"/icons/DiscordLogo.png"}
              alt={""}
              height={24}
              width={24}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <button className="relative flex justify-center items-center gap-4 h-14">
              <p className="">Developer Chat</p>
              <Image src={"/icons/arrow.png"} alt={""} height={14} width={14} />
            </button>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-start items-start px-6 py-4">
            <Image
              src={"/icons/RedditLogo.png"}
              alt={""}
              height={24}
              width={24}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <button className="relative flex justify-center items-center gap-4 h-14">
              <p className="">Energi’s Forum</p>
              <Image src={"/icons/arrow.png"} alt={""} height={14} width={14} />
            </button>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
