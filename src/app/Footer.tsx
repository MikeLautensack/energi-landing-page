import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="px-3 md:px-8 lg:px-[120px] py-16 gap-[54px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
    >
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 col-span-4 lg:col-span-8">
        <div className="col-span-4 md:col-span-2 flex flex-col gap-8">
          <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center md:text-left">
            Use Energi
          </p>
          <div className="hidden md:block">
            <ul className="flex flex-col gap-4">
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Get NRG
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Wallet
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energiswap
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Bridge
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Nexus
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Arcade
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Explorer
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 flex flex-col gap-8">
          <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center md:text-left">
            Learn
          </p>
          <div className="hidden md:block">
            <ul className="flex flex-col gap-4">
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Why Energi
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Defense
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Whitepaper
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Wiki Guides
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Help Desk
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Supported Tokens
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Network Monitor
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">FAQ</li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Roadmap
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 flex flex-col gap-8">
          <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center md:text-left">
            Community
          </p>
          <div className="hidden md:block">
            <ul className="flex flex-col gap-4">
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Investors
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Impact
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Join Our Team
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Merch
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 flex flex-col gap-8">
          <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center md:text-left">
            Join Our Team
          </p>
          <div className="hidden md:block">
            <ul className="flex flex-col gap-4">
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Investors
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Wallet
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Defense
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Impact
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Join our Team
              </li>
              <li className="text-[18px] leading-[22px] text-[#717171]">
                Energi Merch
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center md:justify-start items-center md:items-start col-span-4">
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
        <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center md:text-left">
          Subscribe to the newsletter to hear about Energi updates and events.
        </p>
        <button className="w-full text-[#01E676] border rounded-lg border-[#01E676] h-[70px] md:w-[169px]">
          Subscribe
        </button>
        <div className="flex flex-col w-full gap-8 py-10">
          <div className="w-full flex gap-8 justify-center items-center md:justify-start">
            <Image
              src="/footer-icons/TelegramLogo.png"
              alt=""
              height={32}
              width={32}
            />
            <Image
              src="/footer-icons/DiscordLogo.png"
              alt=""
              height={32}
              width={32}
            />
            <Image
              src="/footer-icons/YoutubeLogo.png"
              alt=""
              height={32}
              width={32}
            />
            <Image
              src="/footer-icons/TwitterLogo.png"
              alt=""
              height={32}
              width={32}
            />
            <Image
              src="/footer-icons/RedditLogo.png"
              alt=""
              height={32}
              width={32}
            />
            <Image
              src="/footer-icons/LinkedinLogo.png"
              alt=""
              height={32}
              width={32}
            />
          </div>
          <div className="w-full flex gap-8 justify-center items-center md:justify-start">
            <Image
              src="/footer-icons/InstagramLogo.png"
              alt=""
              height={32}
              width={32}
            />
            <Image
              src="/footer-icons/GithubLogo.png"
              alt=""
              height={32}
              width={32}
            />
            <Image
              src="/footer-icons/FacebookLogo.png"
              alt=""
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
