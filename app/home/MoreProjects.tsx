"use client";
import AnimatedButton from "../components/ui/AnimatedButton";

export default function MoreProjects() {
  
  return (
    <section className="w-full flex">
      <div className="flex justify-center items-center gap-4 w-full mx-auto p-10 bg-[#141414]">

        <p className="text-white">2017–2025</p>

        <div className="flex-1 h-px bg-white/20"></div>

        {/* BUTTON */}
        <AnimatedButton />

        <p className="text-white">
          More Projects <span className="text-gray-400 align-super text-xs">5</span>
        </p>

      </div>
    </section>
  );
}
