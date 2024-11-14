import Image from 'next/image'
import React from 'react'

const InfluencerCard = ({ src, text }) => {
    return (
        <div className="relative flex justify-end w-[100px] h-[100px] md:h-[240px] md:w-[240px] bg-transparent hover:scale-110 origin-bottom group p-1 md:py-2 my-5 ">

            <div className=" absolute rounded-full left-3 top-6 md:left-9 md:top-6 w-[90px] h-[90px] md:w-[200px] md:h-[200px] bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 opacity-0 group-hover:opacity-100"></div>

            <Image
                src={src}
                className="flex relative rounded-full grayscale group-hover:grayscale-0 h-[100px] w-[100px] md:h-[210px] md:w-[210px]"
                alt="influencer image"
                objectFit="cover"
            />
            <p className='absolute text-[10px] text-center md:text-[20px] flex justify-center items-center rounded-lg p-1 px-3 bg-white text-black top-2/3 opacity-0 group-hover:opacity-100 left-1/3 md:left-1/2 transform -translate-x-1/3 -translate-y-1/3'>{text}<span className="font-bold -rotate-45">&#8594;</span>
            </p>
        </div>

    )
}

export default InfluencerCard