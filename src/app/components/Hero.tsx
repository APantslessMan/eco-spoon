import React from 'react';
import Image from 'next/image';
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6 h-[80vh] flex items-center justify-end bg-primary p-4">
        <div className="max-w-lg text-left *:text-black">
        <div className="text-lg font-bold text-black flex items-center">
  <div className="bg-black w-full max-w-[43px] min-h-[2px] mr-[10px] mt-3"></div>
  Environment First
</div>
          <div className="text-3xl md:text-5xl font-black pt-2">
            Sustainable Products For The Environment
          </div>
          <div className="text-xl md:text-3xl font-bold pt-2">
            We are on a mission to provide high quality products from sustainable sources
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            className="transition-transform duration-[2000ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] transform hover:scale-110"
            fill
            src="/assets/img/hero.jpg"
            alt="hero image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
