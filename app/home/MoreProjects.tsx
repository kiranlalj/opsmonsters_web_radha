import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function MoreProjects() {
  return (
    <section className="w-full flex">
      <div className="flex justify-center items-center gap-4 w-full mx-auto p-6 md:p-12 lg:p-15 bg-[#141414] font-mono text-sm md:text-base lg:text-lg group">
        <p className='flex-1/12 text-white'>2020-2025</p>
        <p className='flex-8/12 h-px bg-white/30'></p>
        <button className='bg-orange-600 text-white rounded-2xl p-4'><FaArrowRightLong /></button>
        <p className='flex-2/12 text-white'>More Projects<span className="ml-1 text-xs text-gray-400 align-super">5</span></p>
      </div>
    </section>
  )
}
