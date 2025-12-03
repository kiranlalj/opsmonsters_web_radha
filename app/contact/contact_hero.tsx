"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  /** Reveal mask animation */
  useEffect(() => {
    const mask = document.getElementById("reveal-mask");
    if (!mask) return;

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

    if (document.readyState === "complete") run();
    else {
      window.addEventListener("load", run, { once: true });
      const t = setTimeout(run, 700);
      return () => clearTimeout(t);
    }
  }, []);

  /** Scroll animation */
  useEffect(() => {
    gsap.fromTo(
      "#form_title, #contact_form",
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#form_section",
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      id="form_section"
      className="
        relative w-full min-h-screen 
        grid grid-cols-1 lg:grid-cols-2 
        overflow-hidden
      "
    >
      {/* Reveal Mask */}
      <div
        id="reveal-mask"
        className="absolute inset-0 bg-white z-20 pointer-events-none"
      ></div>

      {/* LEFT SIDE - IMAGE */}
      <div className="relative h-[55vh] lg:h-screen xl:h-[100vh]">
        <Image
          src="/img/contact_form_hero_bg.webp"
          alt="Contact Background"
          fill
          priority
          className="object-cover"
        />

        {/* Bottom-left heading */}
        <div
          className="
            absolute inset-0 flex flex-col justify-end
            px-6 sm:px-10 md:px-16 xl:px-24
            pb-16
            bg-gradient-to-t from-black/40 to-transparent
          "
        >
          <h1
            className="
              text-white font-bold leading-[1.08]
              text-[40px] sm:text-[52px] md:text-[62px]
              lg:text-[70px] xl:text-[78px]
              w-full
            "
          >
            Thinking about your next move?
          </h1>

          <p
            className="
              text-white/90 mt-6
              text-base sm:text-lg md:text-xl 
              max-w-lg
            "
          >
            Let’s discuss how Create® can help make it real.
          </p>
        </div>
      </div>

{/* ------------------------------------- */}

      <div className="bg-white px-6 sm:px-8 md:px-12 xl:px-20 py-20 flex flex-col justify-center">
        {/* FORM TITLE */}
        <div id="form_title">
          <h1 className="
              font-semibold leading-[0.92]
              text-[70px] sm:text-[85px] md:text-[100px]
              lg:text-[118px] xl:text-[130px]">
            Let&apos;s talk!
          </h1>

          <p className="text-gray-500 text-base sm:text-lg mt-6 max-w-md">
            We&apos;d love to hear from you and your team.
          </p>
        </div>

        {/* FORM */}
        <form
          id="contact_form"
          className="mt-12 flex flex-col gap-10 max-w-lg text-gray-800"
        >
          <input
            type="text"
            placeholder="Your name"
            className="
              w-full border-b border-gray-300 pb-3
              focus:outline-none focus:border-orange-500
              placeholder-gray-400
            "
          />

          <input
            type="text"
            placeholder="Company"
            className="
              w-full border-b border-gray-300 pb-3
              focus:outline-none focus:border-orange-500
              placeholder-gray-400
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full border-b border-gray-300 pb-3
              focus:outline-none focus:border-orange-500
              placeholder-gray-400
            "
          />

          <textarea
            rows={3}
            placeholder="Your message"
            className="
              w-full border-b border-gray-300 pb-3
              focus:outline-none focus:border-orange-500
              placeholder-gray-400
            "
          />

          {/* Submit */}
          <div className="flex items-center gap-6 pt-4">
            <button
              className="
                bg-orange-500 hover:bg-orange-600
                text-white py-3 px-6
                rounded-xl text-sm tracking-wider
                transition-all
              "
            >
              SUBMIT →
            </button>

            <p className="text-xs text-gray-500 max-w-sm">
              By submitting, you agree to our{" "}
              <span className="underline cursor-pointer">Terms & Service.</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
