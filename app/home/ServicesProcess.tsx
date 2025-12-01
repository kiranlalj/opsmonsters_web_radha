"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons
import { LuTelescope } from "react-icons/lu";
import { PiStrategy } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

import AnimatedButton from "../components/ui/AnimatedButton";
import Ourprocessinmotion from "./Ourprocessinmotion";

gsap.registerPlugin(ScrollTrigger);

export default function Servicesprocess() {

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo("#title-section, #subtitle-section, #cta-section",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#maintext-section",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
      }
    }
  );

  gsap.fromTo("#cards-section",
    {x: 100, opacity: 0},
    {x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#cards-grid",
      start: "top 80%",
      end: "bottom 40%",
      scrub: 1,
    }
  });
}, []);


  const services = [
    {
      number: "01",
      icon: <LuTelescope className="w-6 h-6 text-orange-500" />,
      title: "Discovery",
      desc: "We start by listening. Goals, challenges, and vision are mapped out clearly, setting the foundation for everything that follows.",
    },
    {
      number: "02",
      icon: <PiStrategy className="w-6 h-6 text-orange-500" />,
      title: "Strategy",
      desc: "With insights in place, we define the roadmap. Positioning, priorities, and the best way to align design and execution.",
    },
    {
      number: "03",
      icon: <MdDesignServices className="w-6 h-6 text-orange-500" />,
      title: "Design & Build",
      desc: "Ideas take shape. From visuals to digital experiences, we design and develop with sharp attention to detail.",
    },
    {
      number: "04",
      icon: <HiOutlineRocketLaunch className="w-6 h-6 text-orange-500" />,
      title: "Launch & Grow",
      desc: "Delivery is just the beginning. We measure, refine, and scale to ensure your project continues to perform.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-linear-to-b from-slate-950 via-purple-950 to-black py-10 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div id="maintext-section" className="space-y-8 md:space-y-12">
            <h2 id="title-section" className="text-5xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl font-medium text-white leading-tight">
              Services built on process, precision, and people.
            </h2>

            <div id="subtitle-section" className="max-w-lg">
              <p className="text-white/70 text-lg md:text-sm leading-relaxed">
                We combine strategy, design, content, and technology, giving you a single partner for every stage of your brand’s growth.
              </p>
            </div>

            <div id="cta-section" className="flex items-center gap-5">
              <AnimatedButton />
              <p className="text-white">Chat with our Operations Manager</p>
            </div>
          </div>

          <div id="cards-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12 lg:mt-0">
            {services.map((service, i) => (
              <div key={i} id="cards-section" className="group relative bg-black backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-5 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center justify-between mb-3">
                  <span>{service.icon}</span>
                  <span className="text-orange-500 text-[12px]">{"//"}{service.number}</span> 
                </div>
                <div className="w-full h-px bg-white/50"></div>
                <h3 className="text-md font-bold text-white mt-4 mb-2">{service.title}</h3>
                <p className="text-white/60 text-[12px] leading-relaxed">{service.desc}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-orange-500 to-transparent group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Ourprocessinmotion />
    </section>
  );
}
