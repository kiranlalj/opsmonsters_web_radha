import Image from 'next/image'
import React from 'react'

export default function NotFound() {
  return (
    <section className='w-full overflow-hidden flex justify-center items-center gap-20 p-10 md:p-20'>
      <div className="flex flex-col">
        <h1 className='text-7xl md:text-[230px] xl:text-[180px] font-black text-black/50'>404</h1>
        <p className='text-[10px] md:text-2xl text-black/60 uppercase'>Page not found</p>
        <p className='text-[10px] md:text-xl text-black/60'>The page you are looking for does not exist or has been moved.</p>
      </div>
      <div className="flex">
        <Image 
          src="/img/logos/not_found.svg"
          alt="404"
          width={500}
          height={500}
          className='w-[200px] md:w-[500px]'
        />
      </div>
    </section>
  )
}
