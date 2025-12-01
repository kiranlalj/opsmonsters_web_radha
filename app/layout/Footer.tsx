"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

  useEffect(() => {
  gsap.fromTo(
    "#footer_section",
    {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center center",
    },
    {
      opacity: 1,
      scale: 1,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: "#footer_section",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    }
  );
}, []);



  return (
    <footer id="footer_section" className="w-full bg-gray-100 px-6 md:px-12 py-16 text-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-12 gap-12">

        <div className="">
          <div className="flex w-full max-w-4xl items-center overflow-hidden">
            <div className="w-8 md:w-12 h-0.5 bg-red-500" />
            <div className="flex-1 h-px bg-black/30" />
          </div>

          <h2 className="text-xl md:text-[24px] font-normal mt-7">
            Digital experiences that connect, <br /> scale and perform.
          </h2>

          <h1 className="my-7 text-5xl md:text-[80px] font-bold leading-none">
            <span className="text-[#ff4d30]">Create</span>
            <span className="text-[#797c81]">\Studio</span>
          </h1>

          <div className="flex gap-5 items-center overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-20 h-11 object-cover rounded-4xl"
            >
              <source src="/videos/footer_video.mp4" type="video/mp4" />
            </video>

            <p className="max-w-sm text-sm leading-relaxed">
              A creative agency for design, strategy, marketing,
              and scalable premium websites.
            </p>
          </div>

          <p className="mt-10 text-sm">&copy;2025 Create Studio — All work, all rights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p className="font-semibold text-xs text-neutral-500">OFFLINE</p>
            <div className="flex w-full max-w-4xl items-center overflow-hidden my-3">
              <div className="w-8 md:w-12 h-0.5 bg-red-500" />
              <div className="flex-1 h-px bg-black/30" />
            </div>
            <p className="text-sm leading-6">
              Create Studio LLC.<br />
              8 Sunset Blvd, Office 5<br />
              Los Angeles, CA 90026
            </p>
          </div>

          <div>
            <p className="font-semibold text-xs text-neutral-500">ONLINE</p>
            <div className="flex w-full max-w-4xl items-center overflow-hidden my-3">
              <div className="w-8 md:w-12 h-0.5 bg-red-500" />
              <div className="flex-1 h-px bg-black/30" />
            </div>
            <p className="text-sm text-[#ff4d30] font-medium">hello@create.com</p>
          </div>

          <div>
            <p className="mt-10 font-semibold text-xs text-neutral-500">PHONE</p>
            <div className="flex w-full max-w-4xl items-center overflow-hidden my-3">
              <div className="w-8 md:w-12 h-0.5 bg-red-500" />
              <div className="flex-1 h-px bg-black/30" />
            </div>
            <p className="text-4xl font-medium text-neutral-700">
              (310) 555-0165
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
