"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import FirstCover from "/public/image/young-friends-working-together-fitness-class.webp";
import SecondCover from "/public/image/kid-his-father-doing-sport-home.webp";
import { FaAnglesRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";

const CoverHeader = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Swiper
      direction={"vertical"}
      // loop={true}
      autoplay={{ delay: 5000 }}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="relative text-white">
        <Image src={FirstCover} alt="cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div
            className="text-center container flex flex-col justify-center "
            data-aos="fade-up"
          >
            <h1 className="md:text-[50px] text-[25px] font-bold">
              Your Health. Your Decision. Our Support.
            </h1>
            <p className="md:text-[30px] sm:text-[16px] ">
              Taking Care Your Body Is Important
            </p>
            <div className="flex justify-center mt-5">
              <button className="flex  items-center gap-2 px-[24px] py-[9px] bg-[#fff] text-[#333] font-medium rounded-[100px] shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#145954] hover:shadow-lg hover:text-white">
                <FaAnglesRight size={18} />
                Start Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative text-white">
        <Image src={SecondCover} alt="cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center container">
            <h1 className="md:text-[50px] text-[25px] font-bold">
              Your Health. Your Decision. Our Support.
            </h1>
            <p className="md:text-[30px] sm:text-[16px] ">
              Taking Care Your Body Is Important
            </p>
            <div className="flex justify-center mt-5">
              <button className="flex  items-center gap-2 px-[24px] py-[9px] bg-[#fff] text-[#333] font-medium rounded-[100px] shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#145954] hover:shadow-lg hover:text-white">
                <FaAnglesRight size={18} />
                Start Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CoverHeader;
