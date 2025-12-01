"use client";
import AurelisBeachResort from "./home/AurelisBeachResort";
import HeroSection from "./home/HeroSection";
import Blackwell from "./home/Blackwell";
import Lindholm from "./home/Lindholm";
import MoreProjects from "./home/MoreProjects";
import Performance from "./home/Performance";
import BrandCarousel from "./home/BrandCarousel";
import Services from "./home/Services";
import BrandIdentity from "./home/BrandIdentity";
import Howwework from "./home/Howwework";
import ServicesProsss from "./home/ServicesProcess";
import Whychooseus from "./home/Whychooseus";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AurelisBeachResort />
      <Blackwell />
      <Lindholm />
      <MoreProjects />
      <Performance />
      <BrandCarousel />
      <Services />
      <BrandIdentity />
      <Howwework />
      <ServicesProsss />
      <Whychooseus />
    </>
  );
}
