"use client"
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function SelectedWorks() {

  useEffect(() => {
    gsap.fromTo("#SelectedWorks", 
      { scale: 0.8, opacity: 0, y: 100 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#SelectedWorks",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
  }, []);

  return (
    <section className='mt-20 p-7 md:p-40 overflow-hidden'>
      <div id='SelectedWorks' className="flex flex-col">
        <h1 className='text-7xl md:text-[230px] xl:text-[180px] font-black text-black/50'>Selected works</h1>
        <p className='text-[10px] md:text-2xl text-black/60 uppercase'>Alongside the result, you’ll see the process <br /> behind our project.</p>
        <p className='text-sx text-black/50'>Each project began with a challenge and delivered measurable results. Discover how we turn complex problems into clear solutions.</p>
      </div>
    </section>
  )
}
