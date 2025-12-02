"use client";
import AnimatedButton from "../components/ui/AnimatedButton";

export default function MoreProjects() {
  
  return (
    <section className="w-full flex">
      <div className="flex justify-center items-center w-full mx-auto p-5 sm:p-20 bg-[#141414]">

        <p className="text-white">2017–2025</p>

        <div className="flex-1 h-px bg-white/20"></div>

        <AnimatedButton />

        <p className="text-white pl-5">
          More Projects <span className="text-gray-400 align-super text-xs">5</span>
        </p>

      </div>
    </section>
  );
}
