import Image from 'next/image'
import React from 'react'
import samira from "../assets/samira.png"

const CardText = ({ stateName, cityName }) => {
    return (
        <div className='absolute inset-0 flex items-center text-white bg-black bg-opacity-0 rounded-xl flex-col justify-end p-2'>
            <div className='text-red text-center text-[14px] sm:text-[20px]'>
                <h3>{cityName}</h3>
                <p>{stateName}</p>
            </div>
            <div className='flex px-5 p-1 bg-white text-black rounded-3xl items-center gap-2'>
                <p>Samira Hadid</p>

                <div className=' flex h-[23px] w-[23px]'>
                    <Image src={samira} width={23} height={23} className='rounded-full ' alt='samira image' objectFit='cover' />
                </div>
            </div>
        </div>
    )
}

export default CardText
