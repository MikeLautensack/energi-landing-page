import React from "react";
import Hero from "../sections/Hero";
import Whitepaper from "../sections/Whitepaper";
import Features from "../sections/Features";
import Stats from "../sections/Stats";
import Community from "../sections/Community";
import LatestNews from "../sections/LatestNews";
import SpacerImg from "../sections/SpacerImg";

const Desktop = () => {
  return (
    <main className="hidden lg:block">
      <Hero />
      <Features />
      <Whitepaper />
      <SpacerImg />
      <Stats />
      <Community />
      <LatestNews />
    </main>
  );
};

export default Desktop;
