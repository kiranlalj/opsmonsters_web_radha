"use client";
import Image from "next/image";
import AnimatedButton from "../components/ui/AnimatedButton";

export default function Ourprocessinmotion() {
  return (
    <section className="w-full bg-black/30 backdrop-blur-3xl shadow-2xl py-20 px-6 md:px-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="relative w-[300px] h-[200px] overflow-hidden rounded-2xl opacity-80 hover:opacity-100 flex">
            <Image
              src="/img/blackwell_moro_bg.webp"
              alt="Blackwell Motors"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-2xl"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/40 items-center place-items-center place-content-center">
              <Image
                src="/img/blackwell_logo.svg"
                alt="Blackwell Motors"
                width={100}
                height={50}
                quality={100}
                className="mb-10"
              />
              <h1 className="text-2xl font-black text-white">Blackwell Motors</h1>
            </div>
          </div>

          <div className="flex items-center">
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Step inside one of our featured projects.  
              From first brief to launch, follow the process that shows what makes <strong>Create®</strong> different.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 border-l border-white/20 pl-10 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">Our process in motion</h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Explore a real case where strategy, design, and delivery lined up exactly as we work today.
          </p>

          <div className="flex items-center gap-5">
            <AnimatedButton />
            <p className="text-white text-base md:text-lg">Explore Case Studies</p>
          </div>
        </div>

      </div>
    </section>
  );
}
