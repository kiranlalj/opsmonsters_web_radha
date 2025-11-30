"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxVideo() {

  useEffect(() => {
    gsap.set(".scroll-line", {
      opacity: 0,
      y: 100,
    });

    gsap.to(".scroll-line", {
      scrollTrigger: {
        trigger: "#textScrolltrigger",
        start: "top 80%",
        toggleActions: "restart",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="video-section" className="relative h-screen w-full">
      <div className="overflow-hidden h-full w-full relative">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/bg_flowergirl.webm" type="video/webm" />
          <source src="/videos/bg_flowergirl.mp4" type="video/mp4" />
        </video>

        <div id="textScrolltrigger" className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-5 md:space-y-10 leading-none px-8">
            <h1 className="scroll-line text-6xl font-black text-white">Lets Create</h1>
            <h1 className="scroll-line text-6xl font-black text-white">We Listen</h1>
            <h1 className="scroll-line text-6xl font-black text-white">We Imagine</h1>
            <h1 className="scroll-line text-6xl font-black text-red-600">We Create</h1>
            <h1 className="scroll-line text-6xl font-black text-white">beautiful things</h1>
          </div>
        </div>

      </div>
    </section>
  );
}
