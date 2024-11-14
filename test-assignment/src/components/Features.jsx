import React from 'react'
import FeatureCard from './FeatureCard'
import card1Img from "../assets/card1Img.png"
import card2Img from "../assets/card2Img.png"
import card3Img from "../assets/card3Img.png"
import card4Img from "../assets/card4Img.png"

const Features = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:justify-around py-4 w-full'>
            <div className='text-green flex items-center justify-center w-[100vw] md:w-[35vw] flex-wrap text-[3.5vh] md:text-[6vh] text-center'>
                <h3>From Creation to Monetization: Vyb Store Has It All</h3>
            </div>
            <div className='flex gap-3 md:w-fit'>
                <div className='flex flex-col gap-3'>
                    <FeatureCard src={card1Img} heading={"Trusted By Influencers"} desc={"A trusted platform for influencers to grow and earn."} />
                    <FeatureCard src={card2Img} heading={"Authentic Payment Partner"} desc={"Reliable, fast, and secure payments you can trust"} />

                </div>
                <div className='flex flex-col gap-3'>
                    <FeatureCard src={card3Img} heading={"Secured Data"} desc={"Advanced security measures to protect your valuable data"} />
                    <FeatureCard src={card4Img} heading={"Monetize Your Influence"} desc={"Seamlessly turn your influence into consistent revenue"} />
                </div>

            </div>
        </div>
    )
}

export default Features
