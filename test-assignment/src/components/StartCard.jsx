import Image from 'next/image'
import React from 'react'


const StartCard = ({ heading, desc, src, bgColor, rotate, child }) => {
  return (
    <div className={`${bgColor} ${rotate} -top-0 sticky flex flex-col md:flex-row p-3 items-center md:justify-center w-full md:w-[800px]  rounded-3xl gap-10 h-full`}>
      <div className='flex justify-center flex-col w-[100%] md:w-[45%] gap-3 md:gap-10'>
        <div className='text-[15px] md:text-[26px]'>{heading}</div>
        <div className='text-[12px] md:text-[16px] font-medium'>{desc}</div>
      </div>

      <div>

        {child &&
          <div className='h-[310px] bg-black top-0 gap-10 text-[6px] overflow-hidden rounded-2xl'>
            {child}
          </div>}

        {src &&
          <div>
            <Image src={src} className='w-[140px] md:w-[200px] md:h-[290px]' alt='start card' />
          </div>
        }
      </div>

    </div>
  );
};

export default StartCard;
