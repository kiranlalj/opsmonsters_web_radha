"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandIdentity() {
  useEffect(() => {
    const blurMask = document.querySelector(".blur-mask");
    const section = document.querySelector(".brand-section");

    if (!blurMask || !section) return;

    gsap.fromTo(
      blurMask,
      { height: 0, backdropFilter: "blur(0px)" },
      {
        height: "220px",
        backdropFilter: "blur(26px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "top+=300 top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section className="relative brand-section w-full px-10 sm:px-20 py-16 overflow-hidden flex flex-col">

      {/*Blur Parallax Mask */}
      <div className="blur-mask pointer-events-none absolute top-0 left-0 w-full h-40 bg-white/0 backdrop-blur-[0px] z-50"></div>

      <div className="flex flex-col gap-4 mt-10">
        <p className="text-gray-500 text-xs sm:text-sm tracking-wider">
          FOUNDATION
        </p>

        <div className="flex w-full max-w-4xl items-center overflow-hidden">
          <div className="w-6 sm:w-12 h-0.5 bg-red-500" />
          <div className="flex-1 h-px bg-black/50" />
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <h1 className="py-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
          Brand Identity
        </h1>

        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20">
          
          <div className="flex flex-col max-w-md">
            <Image
              src="/img/brandIdentity.jpg"
              alt="Brand Identity"
              width={200}
              height={100}
              quality={100}
              className="rounded-xl w-full h-auto object-cover mb-6"
            />

            <p className="text-sm sm:text-base text-black/60 uppercase leading-relaxed">
              The foundation of every project — how your<br />
              brand looks, feels, and communicates.
            </p>
          </div>

          <div className="flex flex-col">
            <ul className="flex flex-col text-sm sm:text-base gap-4 sm:gap-5 text-black/60">
              <li><span className="text-red-500 font-bold">+ </span> Positioning and messaging frameworks</li>
              <li><span className="text-red-500 font-bold">+ </span> Visual identity systems</li>
              <li><span className="text-red-500 font-bold">+ </span> Brand guidelines for consistent use</li>
              <li><span className="text-red-500 font-bold">+ </span> Digital-first brand systems</li>
              <li><span className="text-red-500 font-bold">+ </span> Branded assets across campaigns</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
