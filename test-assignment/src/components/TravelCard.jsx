'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import CardText from './CardText'


const TravelCard = ({ src, altText = 'Travel destination', cityName, stateName }) => {

    const [width, setWidth] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        setMounted(true);
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='relative'>
            <Image
                className='rounded-xl w-[170px] h-[400px] md:w-[270px]'
                src={src}
                alt={altText}
                quality={100}
            />

            {width > 768 && <CardText cityName={cityName} stateName={stateName} />}
        </div>
    )
}

export default TravelCard
