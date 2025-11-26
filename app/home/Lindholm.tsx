import React from "react";
import Image from "next/image";

export default function Lindholm() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      {/* Background Image - Uses fill */}
      <div className="absolute inset-0">
        <Image
          src="/img/lindholm_bg.webp"
          alt="Lindholm"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Dark Overlay (optional - improves text readability) */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-between h-full w-full p-10 md:p-20">
        
        <div className="self-start">
          <Image
            src="/img/lindholm_logo.svg"
            alt="Lindholm"
            width={140}
            height={70}
            priority
            className="w-auto h-auto max-w-[140px] md:max-w-[180px]"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
            Aspen 877
          </h1>
          <p className="text-[16px] font-mono text-white mt-2 opacity-90">E-mobility brand launch</p>
        </div>

        <div className="self-start text-white font-mono text-xs md:text-sm tracking-wider space-y-1 opacity-90">
          <p>HTML</p>
          <p>Tailwind CSS</p>
          <p>React</p>
          <p>Next.js</p>
          <p>DevOps</p>
        </div>
      </div>
    </section>
  );
}