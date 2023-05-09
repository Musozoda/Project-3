import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Swiper1(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pb-[50px]"
        data-aos="fade-up"
     data-aos-duration="3000"
      >
        <SwiperSlide  className="flex flex-col gap-[24px] ">
          <img src={props.img} alt="" />
          <div className="flex flex-col gap-[12px] p-[24px]">
            <p className="text-left dark:text-white font-[700] text-[16px] text-[#22343D] leading-[28px]">
              {props.p}
            </p>
            <h1 className="text-left dark:text-white font-[700] text-[24px] text-[#22343D] leading-[40px]">
              {props.h1}
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-[24px]">
          <img src={props.img} alt="" />
          <div className="flex flex-col gap-[12px] p-[24px]">
            <p className="text-left dark:text-white  font-[700] text-[16px] text-[#22343D] leading-[28px]">
              {props.p}
            </p>
            <h1 className="text-left dark:text-white  font-[700] text-[24px] text-[#22343D] leading-[40px]">
              {props.h1}
            </h1>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide  className="flex flex-col gap-[24px]">
          <img src={props.img} alt="" />
          <div className="flex flex-col gap-[12px] p-[24px]">
            <p className="text-left dark:text-white  font-[700] text-[16px] text-[#22343D] leading-[28px]">
              {props.p}
            </p>
            <h1 className="text-left dark:text-white  font-[700] text-[24px] text-[#22343D] leading-[40px]">
              {props.h1}
            </h1>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide  className="flex flex-col gap-[24px]">
          <img src={props.img} alt="" />
          <div className="flex flex-col gap-[12px] p-[24px]">
            <p className="text-left dark:text-white  font-[700] text-[16px] text-[#22343D] leading-[28px]">
              {props.p}
            </p>
            <h1 className="text-left  dark:text-white font-[700] text-[24px] text-[#22343D] leading-[40px]">
              {props.h1}
            </h1>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide  className="flex flex-col gap-[24px]">
          <img src={props.img} alt="" />
          <div className="flex flex-col gap-[12px] p-[24px]">
            <p className="text-left dark:text-white  font-[700] text-[16px] text-[#22343D] leading-[28px]">
              {props.p}
            </p>
            <h1 className="text-left dark:text-white  font-[700] text-[24px] text-[#22343D] leading-[40px]">
              {props.h1}
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
