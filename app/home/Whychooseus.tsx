"use client"; 
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Whychooseus() {

  useEffect(() => {
    
    gsap.fromTo(
      "#Whychooseus_title, #Whychooseus_subtitle",
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
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 md:px-12 xl:px-32 py-40 relative">
      
              <div className="col-span-2 flex flex-col space-y-6">
                <div className="hidden md:block">
                  <div className="h-px w-35 bg-white/25" />
                </div>
      
                <div className="flex flex-row md:flex-col">
                  <p className="text-white/60 uppercase tracking-[0.25em] text-base md:text-xs  mt-0 md:mt-10">
                    Why choose us
                  </p>
      
                  <div className="hidden sm:block mt-2 w-35 h-5 bg-white/20" />
      
                  <div className="flex md:hidden col-span-2 items-start">
                    <Image
                      src="/create_studio_logo.svg"
                      alt="Create Studio"
                      width={130}
                      height={60}
                      className="opacity-90"
                    />
                  </div>
                </div>
              </div>
      
              <div className="col-span-8 flex flex-col space-y-10">
                <div className="flex items-center">
                  <div className="w-10 h-[3px] bg-[#ff5e44]" />
                  <div className="flex-1 h-px bg-white/20 ml-4" />
                </div>
      
                <h1 id="Whychooseus_title"
                  className="text-[52px] md:text-[80px] xl:text-[90px] font-semibold leading-[1.05] text-white/95">
                   Designed to Make<br /> Your Life Easier
                </h1>
      
                <p id="Whychooseus_subtitle"
                  className="text-lg md:text-xl xl:text-2xl text-white/60 max-w-3xl leading-relaxed">
                  <span className="inline-block w-12 h-px bg-white/40 mr-4 mb-1 align-middle" />
                  Clear process, quick reviews, and a clean launch at the end. We keep the steps simple so projects never get stuck.
                </p>
      
                {/* BOTTOM TICK MARKS */}
                <div className="w-full mt-6">
                  <div className="text-white/20 tracking-[0.5em] whitespace-nowrap text-sm">
                    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
                  </div>
                </div>
              </div>
      
              <div className="hidden md:block col-span-2 items-start ">
                <Image
                  src="/create_studio_logo.svg"
                  alt="Create Studio"
                  width={130}
                  height={60}
                  className="opacity-90"
                />
              </div>
            </div>
    </section>
  );
}