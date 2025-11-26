"use client";
import AurelisBeachResort from "./home/AurelisBeachResort";
import HeroSection from "./home/HeroSection";
import Blackwell from "./home/Blackwell";
import Lindholm from "./home/Lindholm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AurelisBeachResort />
      <Blackwell />
      <Lindholm />
    </>
  );
}
