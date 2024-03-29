import React from 'react'
import { shoe8 } from '../assets/images'
import Button from "../components/Button.jsx"

const SuperQuality = () => {
  return (
   <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
   <div className='flex flex-1 flex-col'>
   <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold '>
   We provide You
<span className='text-coral-red'>Super</span>
<span className='text-coral-red'>Quality</span>Shoes
   </h2>
   <p className='mt-4 lg:max-w-lg info-text'>
   Emsuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
   </p>
   <p className='mt-6 lg:max-w-lg info-text'>
   Our dedication to detail and excellence ensures your satisfication
   </p>
   <div className='mt-11'>
   <Button label='view detail'/>
   </div>
   </div>
   <div className='flex-1 flex justify-center items-center'>
   <img 
    src={shoe8}
    alt='product detail'
    width={570}
    height={572}
    className='object-contain'
   />
   </div>
   </section>
  )
}

export default SuperQuality