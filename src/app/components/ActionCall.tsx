import React from 'react'
import BlobSvg from './Parts/BlobSvg'
type Props = {}

const ActionCall = (props: Props) => {
  return (
<div className=" flex mt-24 bg-primary justify-start">

{/* Left Section with BlobSvg */}
<div className="flex-1 max-w-[600px] overflow-hidden relative">
  <div className="top-0 left-0 -mt-52 z-10">
    {/* Adjust -mt-32 according to your needs */}
    <BlobSvg />
  </div>
</div>

{/* Middle Section with Text Content */}
<div className="flex-shrink-0 text-center max-w-[550px] min-w-[300px] mr-24 mt-42">
  <div className="text-xl pb-4 mt-4"></div>
  <div className="text-4xl font-black text-left pb-4">Eco-Conscious Products, Uncompromised Quality</div>
  <div className="text-xl text-left pb-4 text-gray-600">We believe that quality should never be compromised, and that’s why we meticulously source products that are not only durable and functional but also environmentally friendly. Our dedication to sustainability means that we seek out materials and processes that minimize environmental impact, ensuring that every product you purchase from us supports a healthier planet.</div>
 
</div>

{/* Right Section with Circular Element */}
<div className="overflow-hidden relative content-end">
  <div className="top-60 left-0 z-0 -mb-32 h-72 w-72 bg-accent rounded-full">
    {/* Adjust top-40 and -mt-32 according to your needs */}
  </div>
</div>
</div>
  )
}

export default ActionCall