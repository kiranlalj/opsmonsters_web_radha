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
    <section className="relative min-h-screen w-full bg-linear-to-b from-slate-950 via-purple-950 to-black py-10 md:py-20 overflow-hidden">
      {/* --------------------- PARALLAX LAYERS --------------------- */}

      {/* Layer 1 — Teal Glow */}
      <div className="parallax-layer absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px]" />
      </div>

      {/* Layer 2 — Purple Glow */}
      <div className="parallax-layer absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-600/25 blur-[150px]" />
      </div>

      {/* Layer 3 — Gradient Fog */}
      <div className="parallax-layer absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-[#032436] via-[#0c0f1e] to-[#14060c]" />
      </div>

      {/* --------------------- MAIN CONTENT --------------------- */}

      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div id="maintext-section" className="space-y-10">
            <h2
              id="title-section"
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[58px] font-medium text-white leading-tight max-w-xl"
            >
              Services built on process, precision, and people.
            </h2>

            <p
              id="subtitle-section"
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-md"
            >
              We combine strategy, design, content, and technology, giving you a
              single partner for every stage of your brand’s growth.
            </p>

            <div id="cta-section" className="flex items-center gap-4 pt-4">
              <AnimatedButton />
              <p className="text-white text-lg">Chat with our Operations Manager</p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div
            id="cards-grid"
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                id="cards-section"
                className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span>{service.icon}</span>
                  <span className="text-orange-500 text-xs tracking-widest">
                    {"//"}{service.number}
                  </span>
                </div>

                <div className="w-full h-px bg-white/20 mb-4"></div>

                <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Bottom Hover Highlight */}
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
