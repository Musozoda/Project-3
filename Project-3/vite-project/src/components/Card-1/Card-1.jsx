import React from 'react'

const Card1 = (props) => {
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" className='lg:mx-auto flex flex-col lg:items-center gap-[30px] items-start max-w-[240px]'>
        <img src={props.img} className='' alt="" />
        <div className='flex flex-col gap-[13px]'>
            <h1 className='dark:text-white font-[600] lg:text-center text-[#22343D] text-[22px]'>{props.h1}</h1>
            <p className='dark:text-white font-[400] lg:text-center text-[16px] text-[#22343D]'>{props.p}</p>
        </div>
    </div>
  )}

export default Card1