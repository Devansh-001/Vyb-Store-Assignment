import React from 'react'
import TravelHead from './TravelHead'
import TravelMain from './TravelMain'
import TravelCards from './TravelCards'
import TravelMountain from './TravelMountain'

const Travel = () => {
    return (
        <div>
            <TravelHead />
            <TravelMain className='relative' />

            <TravelCards />
            <p className='bg-black text-[26px] text-center'>How to list?</p>

            <div className="relative overflow-hidden rounded-lg">
                <div className='absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-pink-800 to-blue-700 opacity-20 blur-xl'>
                </div>

                <TravelMountain />
            </div>

        </div >
    )
}

export default Travel
