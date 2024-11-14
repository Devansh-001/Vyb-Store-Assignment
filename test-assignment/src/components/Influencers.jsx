import React from 'react'
import InfluencerCard from './InfluencerCard'
import inf1 from "../assets/inf1.png"
import inf2 from "../assets/inf2.png"
import inf3 from "../assets/inf3.png"
import inf4 from "../assets/inf4.png"


const Influencers = () => {
    return (
        <div className='flex flex-col items-center gap-10 mt-8 overflow-hidden '>
            <h3 className='text-green md:text-[24px]'>Our Influencers</h3>
            <div className='flex items-center justify-end md:justify-evenly w-[500px] md:w-full gap-1 '>
                <InfluencerCard src={inf1} text={"Samira"} />
                <InfluencerCard src={inf2} text={"Jay"} />
                <InfluencerCard src={inf3} text={"Samira"} />
                <InfluencerCard src={inf4} text={"Samira"} />
            </div>
        </div>
    )
}

export default Influencers
