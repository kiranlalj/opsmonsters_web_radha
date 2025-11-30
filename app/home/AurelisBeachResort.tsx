"use client";
import Image from "next/image";
import Cursor from "../components/ui/Cursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AurelisBeachResort() {
  useEffect(() => {
    gsap.fromTo(
      "#aurelis-bg",
      { scale: 1.5 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#aurelis-section",
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

      <section
        id="aurelis-section"
        className="relative flex items-center justify-center h-screen w-full overflow-hidden cursor-section cursor-none"
      >
        <div id="aurelis-bg" className="absolute inset-0">
          <Image
            src="/img/aurelis_beach_resort.jpeg"
            alt="Aurelis Beach Resort"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full w-full p-10 md:p-20">
          <div className="self-start">
            <Image
              src="/img/Aurelis_logo.svg"
              alt="Aurelis Beach Resort logo"
              width={140}
              height={70}
              priority
            />
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
              Aurelis Beach Resort
            </h1>
            <p className="text-[16px] font-mono text-white mt-2 opacity-90">
              A serene getaway by the beach
            </p>
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
