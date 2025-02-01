import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import ImageBanner1 from '/public/image/h1-banner1.jpg'
import ImageBanner2 from '/public/image/h1-banner2.jpg'
import ImageBanner3 from '/public/image/h1-banner3.jpg'
import Image from "next/image";

const imageList = [
  {
    url : ImageBanner1,
    name : 'Nutrition Coaching'
  },
  {
    url : ImageBanner2,
    name : 'Personal Training'
  },
  {
    url : ImageBanner3,
    name : 'Support & Motivation'
  },
]

const WelcomeContainer = () => {
  return (
    <section className="bg-bgPrimary py-20">
      <div className="container">
      <div className="text-center flex flex-col justify-center items-center gap-1">
        <span className="text-secondary font-semibold">
          Welcome To Marketopia
        </span>
        <h2 className="text-[42px]">
          Get Healthy Body With <br /> Our Coaching
        </h2>
        <p className="text-smallest mb-10">
          About Nutritionist in Anila specializing in sustainable, guaranteed
          weight loss programs
          <br /> to help clients lose weight, increase muscle strength and
          improve cardio respiratory
          <br /> health with clinical based fitness training & nutritional
          coaching.
        </p>

        <div className="flex justify-center mt-5">
          <button className="flex  items-center gap-2 px-[24px] py-[9px] bg-secondary text-[#fff] font-medium rounded-[100px] shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#fff] hover:shadow-lg hover:text-primary">
            <FaAnglesRight size={18} />
            Start Now
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center md:gap-5 md:mt-0 mt-5  font-semibold">
  {imageList.map((item, index) => {
    return (
      <div 
        key={index} 
        className={`transition-transform duration-300 ease-in-out hover:scale-105 mb-5 ${
          index === 1 ? "md:translate-y-16" : ""
        }`}
      >
        <Image src={item.url} alt={item.name} className="mb-4 rounded-lg shadow-lg" />
        <span className="text-[20px] mx-1 block text-center">{item.name}</span>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default WelcomeContainer;
