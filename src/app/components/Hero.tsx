import React from 'react';
import Image from 'next/image';
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="grid grid-cols-12">
        <div className="md:col-span-12 lg:col-span-6 h-[80vh] jusitfy-middle content-center bg-primary">
            <div className="flex">
            <div className="grow"></div>
            <div className="text-justify">
                <div className="text-lg font-bold">____ Environment First</div>
                <div className=" text-5xl pr-4 font-black pt-2">Sustainable Products<br/> For The Environment</div>
                <div className="text-3xl font-bold pr-4 pt-2">We are on a mission to provide high <br/>quality products from sustainbable<br/> sources</div>
            </div>
        </div>
        </div>
        <div className="md:col-span-12 lg:col-span-6 relative h-[80vh] overflow-hidden">
            <div className="absolute inset-0 ">
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