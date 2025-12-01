"use client"; 
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Whychooseus() {

  useEffect(() => {
    
    gsap.fromTo(
      "#title_animation, #subtitle_animation",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#Whychooseus_section",
          start: "top 50%",
          scrub: 1,
        },
      }
    );

    }, []); 

  return (
    <section id="Whychooseus_section" className="relative bg-black text-white overflow-hidden w-full">
      <div className="w-full relative z-10 px-8 py-16 md:py-24 flex flex-col justify-between">
        <div className="w-full flex gap-5 items-center justify-between py-10">
          <div className="flex flex-2/12 items-center">
            <div className="h-px w-31 bg-white/30" />
          </div>

          <div className="flex w-full max-w-4xl items-center overflow-hidden">
            <div className="w-8 md:w-12 h-0.5 bg-red-500" />
            <div className="flex-1 h-px bg-white/20" />
          </div>

          <div className="flex flex-1/12">
            <Image
              src="/create_studio_logo.svg"
              alt="Create Studio"
              width={120}
              height={60}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-2">
            <p className="text-white/60 uppercase tracking-widest text-sm font-light rotate-0 mt-5">
              Why choose us
            </p>
            <div className="mt-1 w-31 h-5 bg-white/20" />
          </div>

          <div className="lg:col-span-8 space-y-12">
            <h1 id="title_animation" className="text-6xl md:text-8xl lg:text-7xl font-bold leading-tight text-white/95">
              The process behind <br />
              <span className="text-white/80">our success</span>
            </h1>

            <p id="subtitle_animation" className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
              <span className="inline-block w-12 h-px bg-white/40 mr-4 align-middle" />
              From first launches to lasting collaborations, we’re trusted to
              deliver on time and at quality.
            </p>

            <div className="flex justify-center w-full max-w-4xl mx-auto">
              <div className="text-white/30">| | | | | | | | | | | | | | | | | | | | | | | | | | | | | |</div>
              <div className="text-white/30"> | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |</div>
              <div className="text-white/30"> | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}