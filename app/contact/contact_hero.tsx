"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  useEffect(() => {
    const mask = document.getElementById("reveal-mask");
    if (!mask) return;

    mask.style.transformOrigin = "center bottom";
    gsap.set(mask, { transformOrigin: "50% 100%" });

    const run = () => {
      gsap.fromTo(
        mask,
        { scaleY: 1 },
        {
          scaleY: 0,
          duration: 1.2,
          ease: "power4.out",
        }
      );
    };

    if (document.readyState === "complete") {
      run();
    } else {
      window.addEventListener("load", run, { once: true });
      // safety: also run after a short timeout if load isn't fired for some reason
      const t = setTimeout(run, 700);
      return () => clearTimeout(t);
    }

    return () => {};
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!document.getElementById("form_section")) return;

    gsap.fromTo(
      "#form_title, #contact_form",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#form_section",
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="form_section"
      className="relative w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden">
      <div
        id="reveal-mask"
        style={{ transformOrigin: "center bottom" }}
        className="absolute inset-0 bg-white z-20 origin-bottom pointer-events-none"></div>

      <div className="relative h-[60vh] lg:h-auto">
        <Image
          src="/img/contact_form_hero_bg.webp"
          alt="hero BG"
          fill
          className="object-cover"
          priority
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-20 bg-gradient-to-t from-black/40 to-transparent">
          <h1 className="text-white text-[42px] md:text-[65px] font-bold leading-[1.1]">
            Thinking about <br /> your next move?
          </h1>

          <p className="text-white/90 mt-6 text-base md:text-xl">
            Let’s discuss how Create® can help make it real.
          </p>
        </div>
      </div>

      <div className="bg-white px-5 md:px-10 py-16 flex flex-col justify-start">
        <div id="form_title">
          <h1 className="text-[70px] md:text-[100px] font-semibold leading-none">
            Let’s talk!
          </h1>

          <p className="text-gray-500 text-lg mt-6">
            We&apos;d love to hear from you and your team.
          </p>
        </div>

        <form id="contact_form" className="mt-4 max-w-xl gap-1">
          <div>
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full border-b border-gray-300 pt-4 pb-2 focus:outline-none focus:border-orange-500 placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company"
              className="w-full border-b border-gray-300 pt-4 pb-2 focus:outline-none focus:border-orange-500 placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 pt-4 pb-2 focus:outline-none focus:border-orange-500 placeholder-gray-400"
            />
          </div>

          <div>
            <textarea
              rows={2}
              placeholder="Your message"
              className="w-full border-b border-gray-300 pt-4 pb-2 focus:outline-none focus:border-orange-500 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-6 pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-5 rounded-xl text-sm tracking-wider transition-all">
              SUBMIT →
            </button>

            <p className="text-xs text-gray-500">
              By submitting, you agree to our{" "}
              <span className="underline cursor-pointer">Terms & Service.</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
