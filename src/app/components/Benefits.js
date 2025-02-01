import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import icon1 from '/public/image/sleep.png'
import icon2 from '/public/image/vitamin testing.png'
import icon3 from '/public/image/holistic health.png'
import Image from "next/image";

const data = [
    {
        title : 'Balance Body & Mind',
        desc : 'The relationship between the mind and body is complex.',
        icon : icon3
    },
    {
        title : 'Physical Activity',
        desc : 'We’re here to help you overcome the barriers in the..',
        icon : icon2
    },
    {
        title : 'Healthy Daily Life',
        desc : 'People are most productive when they wake up, and setting..',
        icon : icon1
    },
    {
        title : 'Improving Health',
        desc : 'The best soluton of is combining diet improvements together..',
        icon : icon3
    },
]

const Benefits = () => {
  return (
    <section className="bg-bgPrimary py-20">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-20">
        <div className=" flex flex-col text-center md:text-start items-center md:items-start">
          <span className="text-secondary font-semibold ">YOUR BENEFITS</span>
          <h2 className="md:text-[42px] text-[30px] my-2 md:my-0">
            Our Health Coaching <br /> Benefits
          </h2>
          <p className="text-smallest mb-5">
            We specialize in sustainable, guaranteed weight loss programs <br />{" "}
            to help clients lose weight, increase muscle strength <br /> and
            improve cardio respiratory health with clinical based fitness
            training &<br /> nutritional coaching We guarantee results.
          </p>
          <div className="flex">
            <button className="flex  items-center gap-2 px-[24px] py-[9px] bg-secondary text-[#fff] font-medium rounded-[100px] shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#fff] hover:shadow-lg hover:text-primary">
              <FaAnglesRight size={18} />
              Start Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 ">
        {data.map((item , index)=>{
                return (
                    <div key={index} className="md:max-w-sm">
                        <Image src={item.icon} alt={item.title} width={65} height={65} loading="lazy"/>
                        <h4 className="text-[20px] py-2 font-semibold hover:text-secondary transition-all">{item.title}</h4>
                        <p className="text-smallest">{item.desc}</p>
                    </div>
                )
            })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
