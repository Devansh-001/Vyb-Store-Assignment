import Image from 'next/image';
import React from 'react';
import travelMain from "../assets/travelMain.png";

const TravelMain = () => {
    return (
        <div className="relative flex justify-center items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
            {/* Background Image */}
            <Image
                src={travelMain}
                alt="Travel Image"
                className="absolute inset-0 object-cover"
                layout="fill"
            />

            {/* Content Container */}
            <div className="font-bold z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-6 sm:px-12 lg:w-1/2 xl:w-2/3 text-center">
                {/* Heading */}
                <h1 className="text-[60px] sm:text-[110px] md:text-[120px] lg:text-[130px] xl:text-[140px]">
                    TRAVEL
                </h1>

                {/* Description */}
                <p className="text-[13px] sm:text-2xl md:text-3xl">
                    Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
                </p>
            </div>
        </div>
    );
};

export default TravelMain;
