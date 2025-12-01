"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";

export default function AnimatedButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const arrowMainRef = useRef<HTMLDivElement>(null);
  const arrowAltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const arrowMain = arrowMainRef.current;
    const arrowAlt = arrowAltRef.current;

    if (!btn || !arrowMain || !arrowAlt) return;

    const onEnter = () => {
      const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });

      tl.to(arrowMain, { x: 20, opacity: 0 }, 0)
        .fromTo(arrowAlt, { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, 0.05);
    };

    const onLeave = () => {
      const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });

      tl.to(arrowAlt, { x: 20, opacity: 0 }, 0)
        .fromTo(arrowMain, { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, 0.05);
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button ref={btnRef} className="relative w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center
        overflow-hidden cursor-pointer">
      {/* Default Arrow */}
      <div
        ref={arrowMainRef}
        className="absolute"
        style={{ opacity: 1 }}
      >
        <FaArrowRightLong className="text-xl text-white" />
      </div>

      {/* Hover Arrow */}
      <div
        ref={arrowAltRef}
        className="absolute"
        style={{ opacity: 0 }}
      >
        <FaArrowRightLong className="text-xl text-white" />
      </div>
    </button>
  );
}
