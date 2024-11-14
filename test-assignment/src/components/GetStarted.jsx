"use client"
import React from 'react'
import StartCard from './StartCard'
import getStarted1 from "../assets/getStarted1.png"
import getStarted2 from "../assets/getStarted2.png"
import getStarted3 from "../assets/getStarted3.png"
import getStarted4 from "../assets/getStarted4.png"
import Form from './Form'



const GetStarted = () => {
    return (
        <div className='flex flex-col p-5 h-[650px] md:h-[600px] gap-10'>
            <div>
                <p className='text-green text-center md:text-[29px]'>How to get started?</p>
            </div>

            <div className='flex flex-col h-[1040px] md:h-[450px] overflow-y-scroll scrollbar-hide relative gap-10 py-8 w-full items-center'>

                <StartCard heading={"Sign Up and create your own store hassle-free."} desc={"Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost."} bgColor="bg-card1" child={<Form />} />

                <StartCard heading={"Monetize your influencer status: Earn money adding real value to your true followers!"} desc={"Let VYB the money now !! Its here and widthdraw it periodically."} src={getStarted2} bgColor="bg-card2" rotate={"rotate-2"} />

                <StartCard heading={"Call audience to your store. Easily integrate links into content."} desc={"After setting up your products, its time to go public. Put your store link in insta bio and lets make first post together !"} src={getStarted3} bgColor="bg-card3" rotate={"-rotate-2"} />

                <StartCard heading={"Build & customize your store front."} desc={"Simply fill in the details to build your digital store. Once done, start selling your products to your audience."} src={getStarted4} bgColor="bg-card4 p-10 -py-10" />

            </div>
        </div>
    )
}

export default GetStarted
