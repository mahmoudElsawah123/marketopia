import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import ImageBanner1 from "/public/image/h1-banner1.jpg";
import ImageBanner2 from "/public/image/h1-banner2.jpg";
import ImageBanner3 from "/public/image/h1-banner3.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

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

const WelcomeContainer = () => {
  const t = useTranslations("welcomeMessage");

  return (
    <section className="bg-bgPrimary dark:bg-black md:py-20 py-10">
      <div className="container">
        <div className="text-center flex flex-col justify-center items-center gap-1">
          <span className="text-secondary font-semibold dark:text-white">
            {t("title")}
          </span>
          <h2 className="text-[42px] dark:text-white">
            {t("description")}
          </h2>
          <p
            className="text-smallest mb-10 dark:text-white"
            dangerouslySetInnerHTML={{ __html: t("about") }}
          ></p>

          <div className="flex justify-center md:mt-5">
            <button className="flex items-center gap-2 px-[24px] py-[9px] bg-secondary dark:bg-white dark:text-black text-[#fff]  font-medium rounded-[100px] shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#fff] hover:shadow-lg hover:text-primary">
              <FaAnglesRight size={18} />
              {t("start_now")}
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center md:gap-5 md:mt-0 mt-5 font-semibold">
          {imageList.map((item, index) => {
            return (
              <div
                key={index}
                className={`transition-transform duration-300 ease-in-out hover:scale-105 mb-5 ${
                  index === 1 ? "md:translate-y-16" : ""
                }`}
              >
                <Image
                  src={item.url}
                  alt={item.name}
                  className="mb-4 rounded-lg shadow-lg"
                />
                <span className="text-[20px] mx-1 block text-center dark:text-white">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WelcomeContainer;
