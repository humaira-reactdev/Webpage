import React from 'react'

const IDoCard = ({cardHead, cardText, cardImg, cardColour}) => {
  return (
    <>
        <div className={`w-[397px] h-[195px] pt-5 px-5 pb-[15px] rounded-xl flex gap-5 ${cardColour}`}>
            <div className='img_col w-[57px]'>
                <img className='w-full' src={cardImg} alt="" />
            </div>
            <div className='cardText'>
                <h2 className='mb-[10px] text-[20px] font-medium font-poppins text-black'>{cardHead}</h2>
                <p className='w-[255px] text-[16px] font-normal font-poppins text-[#44556C] leading-[30px]'>{cardText}</p>

            </div>
        </div>
    </>
  )
}

export default IDoCard