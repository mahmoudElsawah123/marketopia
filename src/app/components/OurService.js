import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import ImageBanner1 from "/public/image/service-04.jpg";
import ImageBanner2 from "/public/image/service-09.jpg";
import ImageBanner3 from "/public/image/service-01.jpg";
import Image from "next/image";

const imageList = [
  {
    url: ImageBanner1,
    name: "Nutrition Coaching",
  },
  {
    url: ImageBanner2,
    name: "Personal Training",
  },
  {
    url: ImageBanner3,
    name: "Support & Motivation",
  },
];

const OurService = () => {
  return (
    <section className="bg-bgSecondary py-20">
      <div className="container">
        <div className="text-center flex flex-col justify-center items-center gap-1">
          <span className="text-secondary font-bold">Our Services</span>
          <h2 className="text-[42px]">
            What We Do For Your Health
            <br /> Ask Now
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-0 mt-5 font-semibold justify-center items-center">
        {imageList.map((item, index) => {
            return (
              <div
                key={index}
                className={` mb-5 hover:shadow-lg hover:bg-white transition-all duration-500 p-5 ${
                  index === 1 ? "md:translate-y-16" : ""
                }`}
              >
                <Image
                  src={item.url}
                  alt={item.name}
                  className="mb-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                  
                />
               <div className="text-center md:max-w-sm px-2 py-2">
               <h4 className="text-[20px] mx-1 block">
                  {item.name}
                </h4>
                <p className="py-1">
                  Health coach helps educate and motivate people to adopt
                  healthy, long-term, sustainable behaviors to improve their.
                </p>
                <div className="flex justify-center mt-5">
                  <button className="flex  items-center gap-2 px-[24px] py-[9px]  text-[#333] font-medium rounded-[100px] shadow-md transition-all duration-300 ease-linear transform hover:scale-105 hover:bg-[#145954] hover:shadow-lg hover:text-white">
                    <FaAnglesRight size={18} />
                    Start Now
                  </button>
                </div>
               </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurService;
