import React from "react";
import Image from "next/image";
import Cursor from "../components/ui/Cursor";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Lindholm() {

  useEffect(() => {
    gsap.fromTo(
      "#lindholm-bg",
      { scale: 1.5 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#lindholm-section",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
  <>
    <Cursor />
    <section id="lindholm-section" className="relative flex items-center justify-center h-screen w-full overflow-hidden cursor-section cursor-none">
      <div id="lindholm-bg" className="absolute inset-0">
        <Image
          src="/img/lindholm_bg.webp"
          alt="Lindholm"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-between h-full w-full p-5 md:p-20">
        
        <div className="self-start">
          <Image
            src="/img/lindholm_logo.svg"
            alt="Lindholm"
            width={140}
            height={70}
            priority
            className="w-auto h-auto max-w-[140px] md:max-w-[180px]"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
            Aspen 877
          </h1>
          <p className="text-[16px] font-mono text-white mt-2 opacity-90">E-mobility brand launch</p>
        </div>

        <div className="self-start text-white font-mono text-xs md:text-sm tracking-wider space-y-1 opacity-90">
          <p>HTML</p>
          <p>Tailwind CSS</p>
          <p>React</p>
          <p>Next.js</p>
          <p>DevOps</p>
        </div>
      </div>
    </section>
  </>
  );
}