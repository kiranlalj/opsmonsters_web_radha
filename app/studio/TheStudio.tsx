
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheStudio() {

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
          trigger: "#Thestudio",
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="Thestudio" className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Reveal Mask */}
      <div
        id="reveal-mask"
        className="absolute inset-0 bg-white z-20 pointer-events-none"
      ></div>

      {/* LEFT SIDE - IMAGE */}
      <div className="relative h-[55vh] lg:h-screen xl:h-screen">
        <Image
          src="/public/img/thestudio_bg.webp"
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
            bg-linear-to-t from-black/40 to-transparent
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
            we listen. <br />we imagine. <br />we create.
          </h1>

        </div>
      </div>

{/* ------------------------------------- */}

      <div className="bg-white px-6 sm:px-8 md:px-12 xl:px-20 py-20 flex flex-col justify-center">
        {/* FORM TITLE */}
        <div id="form_title" className="flex flex-col justify-between h-[80vh] overflow-hidden">
          <h1 className="
              font-semibold leading-[0.92]
              text-[70px] sm:text-[85px] md:text-[100px]
              lg:text-[118px] xl:text-[130px]">
            The Studio
          </h1>

          <p className="text-gray-500 text-base sm:text-lg mt-6 max-w-md">
            We help ambitious teams turn good ideas into strong digital experiences and products.
          </p>
        </div>

      </div>
    </section>
  );
}
