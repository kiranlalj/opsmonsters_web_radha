"use client";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";

export default function MoreProjects() {
  useEffect(() => {
    const btn = document.querySelector(".c-btn");
    const arrowMain = document.querySelector(".c-arrow-main");
    const arrowAlt = document.querySelector(".c-arrow-alt");

    if (!btn || !arrowMain || !arrowAlt) return;

    btn.addEventListener("mouseenter", () => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

      tl.to(arrowMain, { x: 20, opacity: 0 }, 0)
        .fromTo(arrowAlt, { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, 0.1);
    });

    btn.addEventListener("mouseleave", () => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

      tl.to(arrowAlt, { x: 20, opacity: 0 }, 0)
        .fromTo(arrowMain, { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, 0.1);
    });
  }, []);

  return (
    <section className="w-full flex">
      <div className="flex justify-center items-center gap-4 w-full mx-auto p-10 bg-[#141414]">

        <p className="text-white">2017–2025</p>

        <div className="flex-1 h-px bg-white/20"></div>

        {/* BUTTON */}
        <button
          className="
            c-btn relative w-14 h-14 bg-orange-600 
            rounded-2xl flex items-center justify-center
            overflow-hidden cursor-pointer
          "
        >
          {/* Default Arrow */}
          <FaArrowRightLong
            className="c-arrow-main absolute text-2xl text-white"
            style={{ opacity: 1 }}
          />

          {/* Hidden Arrow (slides in later) */}
          <FaArrowRightLong
            className="c-arrow-alt absolute text-2xl text-white"
            style={{ opacity: 0 }}
          />
        </button>

        <p className="text-white">
          More Projects <span className="text-gray-400 align-super text-xs">5</span>
        </p>

      </div>
    </section>
  );
}
