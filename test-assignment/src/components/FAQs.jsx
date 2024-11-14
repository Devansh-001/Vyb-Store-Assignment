import React from 'react'
import QAs from './QAs'

const FAQs = () => {
    return (
        <div
            className={`flex flex-col md:flex-row p-6 items-center md:justify-between w-full rounded-3xl gap-10 border-2`}
        >
            <div className='w-[100%] md:w-[50%]'>
                <h3 className='text-[15px] md:text-[34px] text-green'>FREQUENTLY ASKED QUESTIONS</h3>
                <p className='text-[12px] md:text-[20px] font-medium'>Quick answers to questions you may have. Can’t find what you're looking for?
                </p>
                <p className='text-[12px] md:text-[22px] font-medium'>Check out our full documentation</p>
            </div>
            <div>
                <QAs />
            </div>
        </div>
    )
}

export default FAQs
