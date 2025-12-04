"use client"
import React from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function WhispersHero() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
      gsap.fromTo("#WhispersHero", 
        { scale: 0.8, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: "#WhispersHero",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
    }, []);

  return (
    <section id='WhispersHero'>
      <div className="w-fullflex .flex-col overflow-hidden p-10 md:px-40 md:py-20 bg-white">
        <div className="flex items-center my-10">
            <div className="w-10 h-[3px] bg-[#ff5e44]" />
            <div className="flex-1 h-px bg-black/30 ml-4" />
          </div>

          <p className='text-[25px] text-black/60'>From small sparks to big ideas.</p>

          <h1 id="performance_title" className=" my-14 text-[52px] md:text-[80px] lg:[200px] xl:text-[400px] font-semibold leading-[1.05] text-black/60">Whisper</h1>

          <div className="flex justify-between">
            <p className='text-[25px] text-black/60'>Articles, notes on creativity,<br /> strategy and making things work.</p>
            <div className="flex flex-col text-base text-black/60">
              <p><span className='text-red-500'>+</span> Studio projects and case studies</p>
              <p><span className='text-red-500'>+</span> Notes on design and process</p>
              <p><span className='text-red-500'>+</span> Ideas, insights, and inspiration</p>
            </div>
          </div>
      </div>
    </section>
  )
}
