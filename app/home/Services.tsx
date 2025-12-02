import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {

  useEffect(() => {
    gsap.fromTo("#services", 
      { scale: 0.8, opacity: 0, y: 100 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#services",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
  }, []);

  return (
    <section className='p-7 md:p-20 overflow-hidden'>
      <div id='services' className="flex flex-col">
        <h1 className='text-6xl md:text-[230px] xl:text-[350px] font-black'>Services</h1>
        <p className='text-base md:text-xl text-black/60 uppercase'>What we do best, And what your next project Needs Most</p>
      </div>
    </section>
  )
}
