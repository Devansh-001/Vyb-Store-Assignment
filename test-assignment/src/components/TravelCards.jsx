import React from 'react'
import TravelCard from './TravelCard'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'


const TravelCards = () => {
    return (
        <div className='bg-black left-0 overflow-hidden' >

            <p className='text-center font-bold text-[20px] py-3'>Explore Our Curated Travel Itineraries</p>

            <ul className='flex gap-2 justify-between p-3 w-[620px] h-[430px] md:w-[1110px]'>

                <li><TravelCard src={card1} cityName={"Darjeeling Itinerary"} stateName={"West Bengal"} /></li>
                <li><TravelCard src={card2} cityName={"Munnar Itinerary"} stateName={"Kerala"} /></li>
                <li><TravelCard src={card3} cityName={"Delhi Itinerary"} stateName={"Delhi"} /></li>
                <li><TravelCard src={card3} cityName={"Delhi Itinerary"} stateName={"Delhi"} /></li>

            </ul>
        </div>
    )
}

export default TravelCards
