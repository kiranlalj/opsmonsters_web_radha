"use client"; 
import Image from "next/image"; 
import { useEffect } from "react"; 
import gsap from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { FaArrowRightLong } from "react-icons/fa6"; 

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() { 

  // useEffect(() => {
  //   gsap.fromTo("#bg_img",
  //     {
  //       opacity: 0,
  //       scale: 0.8,
  //       transformOrigin: "center center",
  //     },
  //     {
  //       opacity: 1,
  //       scale: 1,
  //       ease: "power3.out",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: "#footer_section",
  //         start: "top 80%",
  //         end: "top 60%",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // }, []);
  
  useEffect(() => {

    const timelineanimation = gsap.timeline();

    timelineanimation.fromTo(
    "#text_animation",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top 50%",
        // end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    }
  );

  }, []); 

  useEffect(() => {
    
    gsap.to("#scrollTextComingFromBelow", {
      opacity: 1,
      scale: 1.5,
      y: 100,
      duration: 2,
      scrollTrigger: {
        trigger: "#video-section",
        start: "bottom 10%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(".scroll-line", {
      opacity: 0,
      y: 100,
    });

    gsap.to(".scroll-line", {
      scrollTrigger: {
        trigger: "#textScrolltrigger",
        start: "top 80%",
        toggleActions: "restart",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.8,
      ease: "power3.out",
    });

  }, []);
  
  return (
    <>
          <section id="hero-section" className="pin relative h-screen overflow-hidden"> 
            <div id="parallax_bg_content" className="absolute inset-0 z-20 h-screen w-full overflow-hidden">
              <div id="bg_img">
                <Image 
                  src="/hero/hero_bg.webp" 
                  alt="flower girl Background" 
                  fill 
                  priority 
                  className="object-cover object-center" 
                  quality={100} 
                />
              </div> 

              <div id="parallax-content" className="relative max-w-full flex justify-between pt-35 px-5 sm:px-20 z-20">
                <div className="hidden md:flex flex-col gap-[200px] text-white font-mono text-base leading-tight">
                  <p>————— // 00.01*</p>
                  <p>————— // 00.02*</p>
                  <p>————— // 00.03*</p>
                </div>

                <div id="text_animation" className="max-w-full pl-0 sm:pl-[50px] flex flex-10/12 flex-col">
                  <div className="flex justify-between w-full">
                    <h5 className="flex-2 text-white text-left text-2xl sm:text-4xl lg:text-5xl xl:text-5xl pl-0 sm:pl-[170px]"> Digital experiences that <br className="hidden sm:block" /> connect, scale and perform. </h5>
                    <div className="flex flex-1 flex-col items-end mb-6 text-right">
                      <h5 className="text-orange-500 text-5xl sm:text-4xl lg:text-6xl font-normal leading-none"> 120+ </h5>
                      <p className="text-white/80 text-[10px] sm:text-lg uppercase tracking-[0.3em] mt-2"> Quietly making noise for <br />
                        <span>brands worldwide</span>
                      </p>
                    </div>
                  </div>

                  <div id="text_animation" className="flex">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl xl:text-[150px] font-bold mt-5 sm:mt-22 ">
                      <span className="text-orange-500">Create </span>
                      <span className="text-white">/ Studio</span>
                    </h1>
                  </div>

                  <div id="text_animation" className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center relative">
                    <div className="flex flex-col">
                      <p className="text-white/80 text-sm sm:text-lg uppercase tracking-wider font-light mt-8 max-w-xl leading-relaxed"> A design studio trusted by startups and leading brands. We create stories people remember. </p>
                      <div className="mt-5 w-10 h-px bg-white/90"></div>
                      <p className="text-white/80 text-xs sm:text-lg uppercase tracking-widest mt-6"> OUR TIME 10:59:21 <br /> UTC−8 • LOS ANGELES </p> {/* CTA Buttons */} <div className="mt-10 flex flex-wrap gap-5">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold p-4 rounded-xl text-sm uppercase tracking-wider transition hover:scale-105"> See Work
                          <FaArrowRightLong className="inline-block ml-2" />
                        </button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium p-4 rounded-xl text-sm uppercase tracking-wider hover:bg-white/20 transition hover:scale-105"> Let’s Chat
                          <FaArrowRightLong className="inline-block ml-2" />
                        </button>
                      </div>
                    </div> 

                    <div id="text_animation" className="hidden sm:flex flex-col items-end gap-2">
                      <div className="w-full flex items-center gap-4 px-5">
                        <span className="text-white/90 text-sm sm:text-base uppercase tracking-[0.2em] font-semibold"> Showreel </span>
                        <div className="w-40 h-px bg-white"></div>
                        <span className="text-white/70 text-sm uppercase tracking-widest"> 1/2025 </span>
                      </div>

                      <div className="relative w-[340px] sm:w-[380px] md:w-[300px] lg:w-[300px] xl:w-[400px] aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/20 backdrop-blur-xl">
                        <video 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          className="w-full h-full object-cover" 
                          poster="/videos/showreel-poster.jpg">
                          <source src="/videos/hero_showreel.mp4" type="video/mp4" />
                        </video>
                      </div>

                      <div className="w-full pl-5 text-left">
                        <p className="text-white/70 text-[10px] sm:text-sm uppercase tracking-widest leading-tight"> Best Digital Campaign, <span className="font-bold text-white/90 tracking-[0.2em]"> Worbly Awards </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 id="scrollTextComingFromBelow" className=" text-5xl sm:text-6xl font-black text-white text-center">Lets Create</h1>
            </div>
      </section>

      <section id="video-section" className="relative h-screen w-full">
        <div id="bg-video" className="overflow-hidden h-full w-full relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/bg_flowergirl.webm" type="video/webm" />
            <source src="/videos/bg_flowergirl.mp4" type="video/mp4" />
          </video>

          <div id="textScrolltrigger" className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-5 md:space-y-10 leading-none px-8">
              <h1 className="scroll-line text-6xl xl:text-[170px] font-black text-white">We Listen</h1>
              <h1 className="scroll-line text-6xl xl:text-[170px] font-black text-white">We Imagine</h1>
              <h1 className="scroll-line text-6xl xl:text-[170px] font-black text-red-600">We Create</h1>
              <h1 className="scroll-line text-6xl xl:text-[170px] font-black text-white">beautiful things</h1>
            </div>
          </div>

        </div>
      </section>
    </>
); 
}