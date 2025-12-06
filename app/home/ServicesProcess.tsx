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

    // -------------------------
    // TEXT ANIMATION
    // -------------------------
    gsap.fromTo(
      "#title-section, #subtitle-section, #cta-section",
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
        },
      }
    );

    // -------------------------
    // CARD FADE-IN ANIMATION
    // -------------------------
    gsap.fromTo(
      "#cards-section",
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#cards-grid",
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );

    // -------------------------
    // PARALLAX BACKGROUND
    // -------------------------
    const layers = gsap.utils.toArray(".parallax-layer") as Element[];

    layers.forEach((layer, i) => {
      gsap.to(layer, {
        y: (i + 1) * 40,
        ease: "none",
        scrollTrigger: {
          trigger: "#services_section",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    // optional mouse parallax
    interface MouseEventWithClient extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const moveLayer = (e: MouseEventWithClient): void => {
      const x: number = (e.clientX / window.innerWidth - 0.5) * 30;
      const y: number = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".parallax-layer", {
      x,
      y,
      duration: 2,
      ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveLayer);
    return () => window.removeEventListener("mousemove", moveLayer);
  }, []);

  // ===========================
  // SERVICE CARDS
  // ===========================
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
    <section id="services_section" className="relative w-full py-20 bg-[#03070d] overflow-hidden">

            {/* BG GRADIENT */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="
                absolute top-[-30%] left-[-20%]
                w-[900px] h-[900px]
                bg-[#0aa2e1]/40
                blur-[180px]
                rounded-full
              "></div>

              <div className="
                absolute top-[10%] right-[-20%]
                w-[900px] h-[900px]
                bg-[#b52963]/35
                blur-[170px]
                rounded-full
              "></div>
            </div>

            <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div id="maintext-section" className="space-y-10 max-w-[650px]">
                  <h2 id="title-section" className="text-white font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-4xl leading-[1.15]">
                    Services built on process,<br /> precision, and people.
                  </h2>

                  <p id="subtitle-section" className="text-white/70 text-lg leading-relaxed max-w-[500px]">
                    We combine strategy, design, content, and technology, giving you a
                    single partner for every stage of your brand’s growth.
                  </p>

                  <div id="cta-section" className="flex items-center gap-4 pt-4">
                    <AnimatedButton />
                    <p className="text-white text-lg">Chat with our Operations Manager</p>
                  </div>
                </div>

                <div id="cards-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[620px]">
                  {services.map((service, index) => (
                    <div key={index} id="cards-section" className="group relative p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/5">
                      <div className="flex items-center justify-between mb-4">
                        <span>{service.icon}</span>
                        <span className="text-orange-500 text-xs tracking-widest">{"//"}{service.number}</span>
                      </div>

                      <div className="w-full h-px bg-white/20 mb-4"></div>

                      <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">{service.title}</h3>

                      <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>

                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-linear-to-r from-orange-500 to-transparent group-hover:w-full transition-all duration-700" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
      <Ourprocessinmotion />
    </section>
  );
}
