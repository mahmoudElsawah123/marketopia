"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Standard Plan",
    desc: "Best For Beginners",
    yearlyPrice: 150,
    monthlyPrice: 39,
    feathers: [
      "Coaching and Training",
      "Obstacle Standing",
      "Specific Advice Situation",
      "Includes all Workbooks",
      "Individual Coaching ",
    ],
  },
  {
    name: "Personal Plan",
    popular: true,
    desc: "Best For Beginners",
    yearlyPrice: 110,
    monthlyPrice: 35,
    feathers: [
      "Coaching and Training",
      "Obstacle Standing",
      "Specific Advice Situation",
      "Includes all Workbooks",
      "Individual Coaching ",
    ],
  },
  {
    name: "Premium Plan",
    desc: "Best For Beginners",
    yearlyPrice: 190,
    monthlyPrice: 50,
    feathers: [
      "Coaching and Training",
      "Obstacle Standing",
      "Specific Advice Situation",
      "Includes all Workbooks",
      "Individual Coaching ",
    ],
  },
];

const Plan = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div>
      <div className="">
        <div className="mb-12 ">
          <div className="flex justify-center items-center bg-white rounded-full p-1.5 max-w-sm mx-auto">
            <button
              onClick={() => setIsYearly(true)}
              className={`inline-block w-1/2 text-center transition-all duration-500 rounded-full font-semibold py-3 px-3 lg:px-11 ${
                isYearly
                  ? "bg-secondary text-white"
                  : "text-gray-400 hover:text-secondary"
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`inline-block w-1/2 text-center transition-all duration-500 rounded-full font-semibold py-3 px-3 lg:px-11 ${
                !isYearly
                  ? "bg-secondary text-white"
                  : "text-gray-400 hover:text-secondary"
              }`}
            >
              Monthly
            </button>
          </div>
          <div className="mt-12">
            <div className="space-y-8 md:grid  lg:grid-cols-3 md:grid-cols-2 sm:gap-6 xl:gap-8 md:space-y-0">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`text-start hover:scale-105
                      relative flex flex-col 
                     rounded-2xl border border-solid
                      border-gray-300 transition-all duration-500 p-6 xl:p-12 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#145954] to-[#1a6b61] text-white"
                      : "hover:border-[#145954] bg-white shadow-lg"
                  }`}
                >
                  <h3
                    className={` text-[23px] font-semibold ${
                      plan.popular ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.name}
                    {plan.popular && (
                      <span className=" px-3 relative rounded-full border border-solid  bg-white text-secondary text-sm ml-4">
                        Popular
                      </span>
                    )}
                  </h3>
                  <p
                    className={`${
                      plan.popular ? "text-white" : "text-primary"
                    } font-medium py-2`}
                  >
                    {plan.desc}
                  </p>
                  <div
                    className={`flex flex-col border-b  ${
                      plan.popular ? "border-white" : "border-primary"
                    }`}
                  >
                    <span
                      className={`text-[40px] font-semibold mb-2  ${
                        plan.popular ? "text-white" : "text-primary"
                      }`}
                    >
                      $
                      {plan.price !== undefined
                        ? plan.price
                        : isYearly
                        ? plan.yearlyPrice
                        : plan.monthlyPrice}
                      <sub className={`text-[16px]`}>
                        /{" "}
                        {plan.price !== undefined
                          ? "Lifetime"
                          : isYearly
                          ? "Per Year"
                          : "Per Month"}
                      </sub>
                    </span>
                  </div>
                  <div className="mb-10">
                    {plan.feathers.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`text-[18px] flex items-center font-medium gap-5 py-3 ${
                            plan.popular ? "text-white" : "text-primary"
                          }`}
                        >
                          <FaCheckCircle />
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    href="#"
                    className={`py-2.5 px-5 shadow-sm rounded-full transition-all duration-500 text-base font-semibold text-center w-full mx-auto ${
                      plan.popular
                        ? "bg-white text-secondary"
                        : "bg-secondary text-white"
                    }`}
                  >
                    Purchase Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
