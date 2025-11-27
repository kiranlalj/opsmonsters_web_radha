// "use client";
// import React, { useEffect } from 'react'
// import Image from 'next/image';
// import gsap from 'gsap';

// export default function BrandCarousel() {

//   const carouselimgs = [
//     {src: '/img/Aurelis_logo.svg', alt: 'Aurelis Logo'},
//     {src: '/img/blackwell_logo.svg', alt: 'Blackwell Logo'},
//     {src: '/img/lindholm_logo.svg', alt: 'Lindholm Logo'},
//     {src: '/img/opsmonsters-logo.svg', alt: 'Opsmonsters Logo'},
//     {src: '/img/vornberg.svg', alt: 'Vornberg Logo'},
//     {src: '/img/numeriq.svg', alt: 'numeriq Logo'},
//     {src: '/img/monolith.svg', alt: 'monolith Logo'},
//     {src: '/img/wendrich.svg', alt: 'wendrich Logo'},
//     {src: '/img/obliqon.svg', alt: 'obliqon Logo'},
//   ];

//   const carouselList = document.querySelectorAll('.carousel-list');

//   useEffect(() => {
//     gsap.to('.carousel-list', {
//       x: -1000,
//       ease: "none",
//       duration: 20,
//       repeat: -2,
//       }
//     )
//   },[]);

//   return (
//     <section className="w-full flex flex-col items-center justify-center pt-20 bg-black">
//       <h1 className=" text-white text-2xl">Brands who are part of our success story</h1>
//       <div className="flex bg-black flex-col items-center justify-center py-10 px-[200px] overflow-hidden w-full">
//           <div className="carousel-list flex max-content-center gap-10 py-10 animate-scroll animate-marquee">
//             {carouselimgs.map((img, i) => {
//               return (
//                 <div key={i} className="carousel-img w-50 shrink-0 ">
//                   <Image src={img.src} alt={img.alt} width={120} height={60} quality={100}  />
//                 </div>
//               )
//             })}
//           </div>
//       </div>
//     </section>
//   )
// }

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function BrandCarousel() {
  const carouselimgs = [
    { src: "/img/Aurelis_logo.svg", alt: "Aurelis Logo" },
    { src: "/img/blackwell_logo.svg", alt: "Blackwell Logo" },
    { src: "/img/lindholm_logo.svg", alt: "Lindholm Logo" },
    { src: "/img/opsmonsters-logo.svg", alt: "Opsmonsters Logo" },
    { src: "/img/vornberg.svg", alt: "Vornberg Logo" },
    { src: "/img/numeriq.svg", alt: "numeriq Logo" },
    { src: "/img/monolith.svg", alt: "monolith Logo" },
    { src: "/img/wendrich.svg", alt: "wendrich Logo" },
    { src: "/img/obliqon.svg", alt: "obliqon Logo" },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const element = marqueeRef.current;
    const totalWidth = element.scrollWidth / 2;

    // Kill any previous animation
    if (animationRef.current) animationRef.current.kill();

    animationRef.current = gsap.to(element, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  return (
    <section className="w-full bg-black py-20 overflow-hidden relative">
      {/* Title */}
      <h1 className="text-center text-white text-2xl md:text-4xl mb-10 font-medium">
        Brands who are part of our success story
      </h1>

      <div className="relative px-[200px] md:px-[300px] lg:px-[400px] overflow-hidden">
        
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />

        <div ref={marqueeRef} className="flex items-center gap-16 md:gap-24 py-8 whitespace-nowrap">
          {carouselimgs.map((img, i) => (
            <div key={i} className="shrink-0">
              <Image
                src={img.src}
                alt={img.alt}
                width={120}
                height={60}
                // className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}

          {carouselimgs.map((img, i) => (
            <div key={`dup-${i}`} className="shrink-0">
              <Image
                src={img.src}
                alt={img.alt}
                width={120}
                height={60}
                // className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}