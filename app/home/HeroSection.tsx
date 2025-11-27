"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {

  useEffect(() => {
    gsap.from('#hero_bg_zoomout',
      { scale: 1.2, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div id="hero_bg_zoomout" className="absolute inset-0">
        <Image
          src="/hero/hero_bg.webp"
          alt="flower girl Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* parallax background video */}
      <div className="absolute inset-0 z-0">
        <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/videos/hero_showreel.mp4"
          >
            <source src="/videos/bg_flowergirl.webm" type="video/webm" />
            <source src="/videos/bg_flowergirl.mp4" type="video/mp4" />
          </video>
      </div>

      <div className="relative max-w-full flex justify-between pt-20 px-7">
        <div className="hidden md:flex flex-col gap-[150px] text-white font-mono text-[10px] leading-tight">
          <p>————— // 00.01*</p>
          <p>————— // 00.02*</p>
          <p>————— // 00.03*</p>
        </div>

        <div className="max-w-full flex flex-10/12 flex-col px-7">
          <div className="flex justify-between w-full">
            <h5 className="flex-2 text-white text-left text-4xl pl-[150px]">
              Digital experiences that<br /> connect, scale and perform.
            </h5>

            <div className="flex flex-1 flex-col items-end mb-6 text-right">
              <h5 className="text-orange-500 text-5xl sm:text-4xl lg:text-6xl font-normal leading-none">
                120+
              </h5>
              <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-2">
                Quietly making noise for<br /><span>brands worldwide</span>
              </p>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-8xl font-bold">
              <span className="text-orange-500">Create </span>
              <span className="text-white">/ Studio</span>
            </h1>
          </div>

          <div className="flex justify-between items-center relative">
            <div className="flex flex-col">
              <p className="text-white/70 text-sm uppercase tracking-wider font-light mt-8 max-w-xl leading-relaxed">
                A design studio trusted by startups and leading brands.<br />
                We create stories people remember.
              </p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-6">
                OUR TIME 10:59:21<br />
                UTC−8 • LOS ANGELES
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold p-4 rounded-xl text-sm uppercase tracking-wider transition hover:scale-105">
                  See Work <FaArrowRightLong className="inline-block ml-2" />
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium p-4 rounded-xl text-sm uppercase tracking-wider hover:bg-white/20 transition hover:scale-105">
                  Let’s Chat <FaArrowRightLong className="inline-block ml-2" />
                </button>
              </div>
            </div>

            {/* Showreel Card*/}
            <div className="flex flex-col items-end gap-1">
              <div className="w-full flex items-center gap-4 px-5">
                <span className="text-white/90 text-sm uppercase tracking-[0.2em] font-semibold">
                  Showreel
                </span>
                <div 
                  className="w-20 h-px bg-white" ></div>
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  1/2025
                </span>
              </div>

              <div className="relative w-[340px] sm:w-[380px] md:w-[300px] xl:w-[300px] aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/20 backdrop-blur-xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/videos/showreel-poster.jpg"
                >
                  <source src="/videos/hero_showreel.webm" type="video/webm" />
                  <source src="/videos/hero_showreel.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="w-full pl-5 text-left">
                <p className="text-white/70 text-[10px] uppercase tracking-widest leading-tight">
                  Best Digital Campaign,
                  <span className="font-bold text-white/90 tracking-[0.2em]">
                    Worbly Awards
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}
    </section>
  );
}