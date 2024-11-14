import Image from 'next/image';
import React from 'react';
import mountain from '../assets/mountain.png';
import { FaPlane } from 'react-icons/fa';

const TravelMountain = () => {
    return (
        <div className="relative flex flex-col items-start justify-start text-white h-auto">
            {/* Background Image */}
            <Image src={mountain} alt="mountain image" layout="fill" objectFit="cover" className="opacity-60 z-0"/>

            {/* Responsive SVG Curved Line */}
            <svg
                className="absolute w-full h-auto z-10"
                viewBox="0 0 100 30" // Increase height for better curve visibility
                preserveAspectRatio="none" // Stretches SVG to fit container
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Adjusted Path for Deeper Curve */}
                <path
                    d="M0,0 C25,40 75,40 100,0"  // More curved line for a deeper effect
                    stroke="#ffffff"
                    strokeWidth="0.1"
                    fill="none"
                    strokeDasharray="6" // Adjust dash length to make it smoother
                />
            </svg>

            {/* Overlay Content */}
            <div className="relative z-20 flex flex-col items-center text-center w-full p-2">
                {/* Steps with Plane Icons */}
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-center space-y-2">
                        <FaPlane className="text-3xl rotate-45 text-white" />
                        <h2 className="text-lg font-bold">01</h2>
                        <p>Create Itinerary</p>
                    </div>
                    <div className="relative flex flex-col items-center mt-[300px]"> {/* Adjusting for deeper curve */}
                        <FaPlane className="text-3xl text-white" />
                        <h2 className="text-lg font-bold">02</h2>
                        <p>Convert into Travel Package</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <FaPlane className="text-3xl -rotate-45 text-white" />
                        <h2 className="text-lg font-bold">03</h2>
                        <p>Earn by sharing</p>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-white mt-12 text-[25px] sm:text-[20px]">
                    You Curate Experience, We Make It Happen
                </p>
            </div>
        </div>
    );
};

export default TravelMountain;
