"use client";

import React from 'react';
import Image from 'next/image';
import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between xl:justify-between w-full p-4 bg-[#181818]">

            {/* Left Side (Text) */}
            <div className="w-full flex flex-col mb-8 lg:mb-0 lg:w-[40vw] xl:w-[40vw] justify-between py-2 ">
                <h1 className="text-[34px] lg:text-[60px] font-semibold flex flex-wrap gap-2">
                    <span className="bg-[#FFFFFF] text-black px-2 py-1 rounded-lg">One</span>
                    <span className="bg-[#FFFFFF] text-black px-2 py-1 rounded-lg">Stop</span>
                    <span className="bg-[#FFFFFF] text-black px-2 py-1 rounded-lg">Marketplace</span>
                    <span className="bg-[#FFFFFF] text-black px-2 py-1 rounded-lg">For</span>
                    <span className="bg-[#00DC82] text-black px-2 py-1 rounded-lg">Influencers</span>
                </h1>

                <p className="text-white text-[20px] sm:text-[14px] md:text-[20px] lg:text-[32px] sm:text-left mt-4">
                    "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
                </p>

                <div className="flex gap-6 sm:gap-8 ">
                    <button className="bg-[#00DC82] py-2 rounded-lg px-3 text-sm sm:text-lg text-black">
                        Demo Store
                    </button>

                    <button
                        style={{
                            border: "4px solid transparent",
                            borderImage: "linear-gradient(to right, #4794FF, #FF5D5D) 1",
                            padding: "8px 15px",
                        }}
                    >
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4794FF] to-[#FF5D5D]">
                            Join Waitlist
                        </span>
                    </button>
                </div>
            </div>

            {/* Right Side (Image) */}
            <div className="w-full lg:w-[50vw] flex justify-center mt-8 lg:mt-0">
                <Image src={hero} alt="hero image" className="w-full object-cover" />
            </div>
        </div>
    );
}

export default Hero;

