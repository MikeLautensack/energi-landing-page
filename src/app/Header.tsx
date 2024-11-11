import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full text-[18px] px-3 md:px-8 lg:px-[120px]">
      <div
        id="top-header"
        className="w-full flex justify-end gap-12 items-center h-16"
      >
        <div className="flex gap-6">
          <h3 className="font-normal text-[#717171]">Whitepaper</h3>
          <h3 className="font-normal text-[#717171]">Wiki</h3>
        </div>
        <div className="flex gap-6 h-8">
          <Image
            src="/icons/Vector.png"
            alt="Picture of the author"
            height={32}
            width={32}
          />
          <Image
            src="/icons/Discord.png"
            alt="Picture of the author"
            height={32}
            width={32}
          />
          <Image
            src="/icons/Twitter.png"
            alt="Picture of the author"
            height={32}
            width={32}
          />
        </div>
      </div>
      <div className="h-[2px] bg-[#717171]" />
      <div
        id="bottom-header"
        className="w-full flex items-center gap-[54px] py-6"
      >
        <div className="h-full flex items-center justify-start">
          <div className="flex gap-[7px] w-[114px] h-7">
            <Image
              src="/icons/logo-img.png"
              alt="Picture of the author"
              height={28}
              width={28}
            />
            <Image
              src="/icons/logo-text.png"
              alt="Picture of the author"
              height={18}
              width={80}
            />
          </div>
        </div>
        <div className="text-[#FFFFFF] w-full flex flex-wrap gap-8">
          <p>Use Energi</p>
          <p>Learn</p>
          <p>Community</p>
          <p>Join Our Team</p>
          <p>News</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
