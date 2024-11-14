import Image from 'next/image'
import React from 'react'

const FeatureCard = ({ src, heading, desc }) => {
  return (
    <div className='flex flex-col bg-black rounded-xl items-center h-fit w-[45vw] md:w-[19vw] py-8'>
      <div className='flex flex-col text-center w-fit flex-wrap p-3 px-7'>
        <h3 className='text-[3vh]'>{heading}</h3>
        <p className='text-[2.5vw] md:text-[0.8vw]'>{desc}</p>
      </div>
      <Image src={src} height={120} width={120} alt='feature card image' />
    </div>
  )
}

export default FeatureCard
