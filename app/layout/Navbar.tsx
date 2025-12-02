"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    }
  }, [open]);

  // Close menu + animate out
  const handleMenuClose = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setOpen(false),
    });
  };

  useEffect(() => {
    gsap.fromTo('header',
      { y: -100 },
      { y: 0, duration: 4, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      {/* MAIN NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 h-16">
          
          <Link href="/" prefetch={true} className="flex ">
            <Image
              src="/create_studio_logo.svg"
              width={150}
              height={100}
              alt="Create Studio Logo"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="flex justify-between items-center w-full ml-50 text-white">
            <div className="hidden md:flex items-center gap-10 text-base tracking-wide uppercase">
              <Link href="/work" className="hover:text-orange-400">Work<span className="ml-1 text-xs bg-white rounded p-0.5 text-gray-500 group-hover:text-black align-super">5</span></Link>
              <Link href="/studio" className="hover:text-orange-400">Studio</Link>
              <Link href="/whispers" className="hover:text-orange-400">Whispers<span className="ml-1 text-xs bg-white rounded p-0.5 text-gray-500 group-hover:text-black align-super">7</span></Link>
            </div>

            <Link
              href="/contact"
              className="hidden md:block text-base text-white hover:text-orange-400 uppercase tracking-wide"
            >
              Contact
            </Link>
          </nav>



          {/* MOBILE HAMBURGER */}
          <div
            className="md:hidden flex flex-col gap-2 cursor-pointer p-2 rounded-md"
            onClick={() => setOpen(true)}
          >
            <div className="w-10 border-t-2 border-gray-950"></div>
            <div className="w-5 border-t-2 border-gray-950"></div>
            <div className="w-10 border-t-2 border-gray-950"></div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl text-black z-999
        transition-all duration-300 
        ${open ? "pointer-events-auto" : "pointer-events-none opacity-0"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end px-8 py-6">
          <div
            className="cursor-pointer p-2 rounded-md"
            onClick={handleMenuClose}
          >
            <div className="w-6 border-t-2 border-orange-400 rotate-45 translate-y-1"></div>
            <div className="w-6 border-t-2 border-orange-400 -rotate-45 -translate-y-1"></div>
          </div>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col text-right mt-16 mr-10 gap-8 text-xl tracking-wide uppercase">
          {["Work", "Studio", "Whispers", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              scroll={false}
              onClick={handleMenuClose}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="hover:text-orange-500"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
