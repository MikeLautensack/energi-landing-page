import React from "react";
import Hero from "../sections/Hero";
import Whitepaper from "../sections/Whitepaper";
import Features from "../sections/Features";
import Stats from "../sections/Stats";
import Community from "../sections/Community";
import LatestNews from "../sections/LatestNews";

const Mobile = () => {
  return (
    <main className="md:hidden">
      <Hero />
      <Whitepaper />
      <Features />
      <Stats />
      <Community />
      <LatestNews />
    </main>
  );
};

export default Mobile;
