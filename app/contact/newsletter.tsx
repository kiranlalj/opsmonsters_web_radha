"use client";
import React from "react";

export default function NewsletterFooter() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-6 max-w-md">

          <h1 className="text-4xl lg:text-5xl font-medium text-[#797c81] leading-tight">
            Keep you in <br /> the loop.
          </h1>

          <p className="text-gray-500 text-sm lg:text-base">
            Get the latest news, insights directly <br />
            to your inbox. <span className="text-red-500">*</span>
          </p>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="
              w-full pt-4 pb-2 border-b border-gray-300
              text-gray-700 focus:outline-none
              placeholder:text-gray-400
            "
          />

          <button className="
            w-full bg-[#FFB5A6] text-white font-medium tracking-wide
            py-4 rounded-xl flex items-center justify-center
            hover:bg-[#ffa896] transition-all
          ">
            JOIN OUR NEWSLETTER →
          </button>

          <p className="text-xs text-gray-500">
            By submitting, you agree to our{" "}
            <span className="text-red-500 cursor-pointer">Terms & Service.</span>
          </p>

          <p className="text-xs text-gray-400">
            <span className="text-red-500">*</span> No spam, just awesome updates.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">

          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 tracking-widest">
                NAVIGATE
              </h3>

              <div className="flex w-full max-w-4xl py-4 items-center overflow-hidden">
                <div className="w-8 md:w-12 h-0.5 bg-red-500" />
                <div className="flex-1 h-px bg-black/30" />
              </div>

              <ul className="mt-4 space-y-3 text-gray-700 text-xs">
                <li>HOME</li>
                <li>WORK</li>
                <li>STUDIO</li>
                <li>WHISPERS</li>
                <li>CONTACT</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 tracking-widest">
                LINKS
              </h3>

              <div className="flex w-full py-4 max-w-4xl items-center overflow-hidden">
                <div className="w-8 md:w-12 h-0.5 bg-red-500" />
                <div className="flex-1 h-px bg-black/30" />
              </div>

              <ul className="mt-4 space-y-3 text-gray-700 text-xs">
                <li>TERMS OF SERVICE</li>
                <li>PRIVACY POLICY</li>
                <li>DISCLAIMER</li>
                <li>404</li>
                <li className="font-semibold">MORE TEMPLATES</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center text-left gap-4">
            <h3 className="text-xs font-semibold text-gray-500 tracking-widest">
              Follow us on socials
            </h3>

            <div className="flex gap-4 text-orange-600 font-medium text-lg">
              <span className="cursor-pointer">X</span>
              <span className="cursor-pointer">Li</span>
              <span className="cursor-pointer">IG</span>
              <span className="cursor-pointer">FB</span>
              <span className="cursor-pointer">WA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
