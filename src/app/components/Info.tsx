import React from 'react'

type Props = {}

const Info = (props: Props) => {
  return (
    <div className="justify-center flex mt-24">
    <div className="flex-grow"></div>
    <div className="flex-1 text-center max-w-[637px] min-w-[380px] mt-42">
        <div className="text-xl pb-4 text-green-900">EcoSpoons Renewables</div>
        <div className="text-4xl font-black text-left pb-4">Experience Quality Renewables</div>
        <div className="text-xl text-left pb-4 text-gray-600">Discover the benefits of using eco-friendly, renewable products in your daily life. Learn about the sustainable sourcing methods that protect our planet. Our commitment to quality ensures you get the best without compromising the environment. Join us in making a positive impact with every purchase.</div>
        <div className="btn rounded-btn text-2xl font-bold drop-shadow-lg bg-primary">Products</div>


    </div>
    <div className="flex-grow"></div>
    </div>
  )
}

export default Info