import Image from 'next/image'
import React from 'react'

type Props = {}

const Info = (props: Props) => {
  return (

<div className="flex justify-center mt-24 lg:bg-right lg:bg-no-repeat lg:bg-[url(/assets/img/spoon.png)]"
     >
  <div className="flex-1 flex justify-center items-center max-w-[637px] min-w-[380px]">
    <div className="text-center">
      <div className="text-xl pb-4 text-green-900">EcoSpoons Renewables</div>
      <div className="text-4xl font-black pb-4">Experience Quality Renewables</div>
      <div className="text-xl pb-4 text-gray-600">
        Discover the benefits of using eco-friendly, renewable products in your daily life. Learn about the sustainable sourcing methods that protect our planet. Our commitment to quality ensures you get the best without compromising the environment. Join us in making a positive impact with every purchase.
      </div>
      <div className="btn rounded-btn text-2xl font-bold drop-shadow-lg bg-primary">Products</div>
    </div>
  </div>
</div>




  )
}

export default Info