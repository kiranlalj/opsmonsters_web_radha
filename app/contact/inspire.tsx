"use client";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Inspire() {
  useEffect(() => {
    // ensure ScrollTrigger is up to date after layout/images
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 200);

    // Timeline: split masks open from center
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#inspire-section",
        start: "top center",      // adjust when the reveal starts
        end: "bottom top",
        toggleActions: "play reverse play reverse", // open on enter, close on leave back
        // markers: true,         // enable for debug
      }
    });

    // initial ensure masks are exactly covering (xPercent 0)
    gsap.set(".mask-left", { xPercent: 0 });
    gsap.set(".mask-right", { xPercent: 0 });

    // animate left mask to left, right mask to right
    tl.to(".mask-left", {
      xPercent: -100,
      duration: 1.0,
      ease: "power3.inOut",
    }, 0)
      .to(".mask-right", {
        xPercent: 100,
        duration: 1.0,
        ease: "power3.inOut",
      }, 0);

    // cleanup on unmount
    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      tl.kill();
      ScrollTrigger.getAll().forEach(s => s.kill());
    };
  }, []);

  return (
    <section id="inspire-section" className="relative w-full min-h-screen overflow-hidden">

      <div className="mask-left absolute top-0 left-0 w-1/2 h-full bg-white z-60" />
      <div className="mask-right absolute top-0 right-0 w-1/2 h-full bg-white z-60" />

      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/contact_bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-700">9 years</h2>
            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-sm">
              Building lasting partnerships, scaling brands, and shipping work that stands out.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {["120+ projects delivered", "99% on-time launches", "84% average boost in engagement"].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-xl leading-none">+</span>
                <p className="text-gray-700 text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold text-gray-300 pt-10 tracking-tight">2016 — 2025</h1>
        </div>

        <div className="space-y-10">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-light leading-tight text-[#797c81]">
            Let us <span className="text-orange-500 font-medium">inspire</span>
            <br /> your next <br /> project
          </h1>

          <div className="flex items-start gap-6">
            <div className="w-32 h-40 relative rounded-xl overflow-hidden shadow-md">
              <Image src="/img/ceo_profile.webp" alt="CEO" fill className="object-cover" quality={100} />
            </div>

            <div className="max-w-xs">
              <p className="text-gray-600 italic text-sm leading-relaxed">
                We listen first, stay transparent, and deliver what we promise. Every project matters to us.
              </p>
              <p className="text-gray-800 font-medium mt-3 text-sm">Tobias Neumann</p>
              <p className="text-gray-400 text-xs">CEO of Create®</p>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 w-fit transition-all duration-300 active:scale-95">
            BOOK AN INTRO CALL →
          </button>
        </div>
      </div>
    </section>
  );
}
