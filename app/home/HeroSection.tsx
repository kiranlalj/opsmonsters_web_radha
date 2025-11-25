"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-teal-900/20 via-blue-900/20 to-indigo-900/30 animate-fade-in">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero_bg.webp"
          alt="Studio Background"
          fill
          priority
          className="object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Grid Pattern Overlay */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/%3E%3C/g%3E%3C/svg%3E')] opacity-100" /> */}

      <div className="relative z-20 px-4 sm:px-6 md:px-12 pt-16 sm:pt-24 md:pt-32 max-w-6xl w-full h-full flex flex-col justify-center">
        
        <div className="hidden sm:block text-white font-mono text-[10px] md:text-[11px] tracking-widest absolute left-4 sm:left-6 md:left-12 top-20 sm:top-28 md:top-32">
          —————— // 00.01*
        </div>
        <div className="hidden sm:block text-white font-mono text-[10px] md:text-[11px] tracking-widest absolute left-4 sm:left-6 md:left-12 top-36 sm:top-44 md:top-52">
          —————— // 00.02*
        </div>
        <div className="hidden sm:block text-white font-mono text-[10px] md:text-[11px] tracking-widest absolute left-4 sm:left-6 md:left-12 top-52 sm:top-64 md:top-72">
          —————— // 00.03*
        </div>

        <h1 className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[0.95] max-w-2xl md:max-w-3xl tracking-tight mb-6 sm:mb-8 md:mb-12">
          Digital experiences that<br className="hidden sm:block" />
          connect, scale and perform.
        </h1>

        <div className="relative mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[150px] leading-none tracking-[-0.06em] font-black">
            <span className="text-orange-500/95">Create</span>
            <span className="text-white/95">\</span>
            <span className="text-white/95">Studio</span>
          </h2>
        </div>

        <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md lg:max-w-xl leading-relaxed tracking-[0.05em] uppercase font-light mb-6 sm:mb-8">
          A design studio trusted by startups and leading brands.<br />
          We create stories people remember.
        </p>
        <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md lg:max-w-xl leading-relaxed tracking-[0.05em] uppercase font-light mb-6 sm:mb-8">
          OUR TIME 10:59:21 <br /> UTC-8 LOS ANGELES
        </p>

        {/* CTA Buttons*/}
        <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6">
          <button 
            className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ease-in-out"
            aria-label="See our work"
          >
            See Work →
          </button>
          <button 
            className="bg-white/10 backdrop-blur-lg border border-white/30 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out"
            aria-label="Start a conversation"
          >
            Let’s Chat →
          </button>
        </div>
      </div>
      
      <div className="absolute right-4 sm:right-6 md:right-12 top-16 sm:top-24 md:top-32 text-right z-30">
        <div className="text-orange-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter">
          120+
        </div>
        <p className="text-white/60 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[2px] sm:tracking-[3px] mt-1 sm:mt-2 leading-tight max-w-[120px] sm:max-w-none">
          Quietly making noise for<br/>
          <span className="tracking-[3px] sm:tracking-[4px]">brands worldwide</span>
        </p>
      </div>

      {/* Showreel Video Box */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-12 z-40">
        <div className="relative w-[200px] sm:w-[260px] md:w-[340px] h-[140px] sm:h-[185px] md:h-[240px] bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/videos/showreel-poster.jpg"
          >
            <source src="/videos/showreel.webm" type="video/webm" />
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] md:border-l-[16px] border-l-white border-t-transparent border-b-transparent border-t-[8px] sm:border-t-[12px] md:border-t-[16px] md:border-b-[16px] ml-0.5 sm:ml-1" />
            </div>
          </div>

          {/* Showreel Label */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-white/80 text-[10px] sm:text-[11px] uppercase tracking-widest font-medium">
            Showreel ——————————————— 2025
          </div>

          <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 text-white/60 text-[8px] sm:text-[9px] uppercase tracking-widest leading-tight max-w-[120px] sm:max-w-[140px]">
            Best Digital Campaign,<br/>
            <span className="font-semibold tracking-[1.5px] sm:tracking-[2px]">Worbly Awards</span>
          </div>

          <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-rose-500/90 to-pink-600/90 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-[10px] sm:text-[12px] font-bold tracking-tight">N•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}