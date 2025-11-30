"use client";
import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";

export default function Cursor() {
  useEffect(() => {
    const bigmouse = document.getElementById("cursor-big");
    const sections = document.querySelectorAll(".cursor-section");

    if (!bigmouse || sections.length === 0) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      bigmouse.style.transform = `translate(${mouseX - 80}px, ${mouseY - 80}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    window.addEventListener("mouseleave", () => {
      bigmouse.classList.add("scale-0", "opacity-0");
    });

    const detectScrollPosition = () => {
      const elUnderMouse = document.elementFromPoint(mouseX, mouseY);

      if (!elUnderMouse) return;

      const insideSection = elUnderMouse.closest(".cursor-section");

      if (insideSection) {
        bigmouse.classList.remove("scale-0", "opacity-0");
      } else {
        bigmouse.classList.add("scale-0", "opacity-0");
      }
    };

    window.addEventListener("scroll", detectScrollPosition);

    const observer = new IntersectionObserver(
      () => detectScrollPosition(),
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", detectScrollPosition);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="cursor-big"
      className="
        fixed top-0 left-0 w-40 h-40 rounded-full bg-orange-500
        flex flex-col items-center justify-center text-white
        pointer-events-none z-9999
        opacity-0 scale-0 transition-none
      "
    >
      <GoArrowRight className="text-5xl" />
      <p className="text-md font-medium tracking-wide mt-1">
        View case study
      </p>
    </div>
  );
}
