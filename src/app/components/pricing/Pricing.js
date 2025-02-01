import Link from "next/link";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import Plan from "./Plan";

const Pricing = () => {
  return (
    <section className="bg-[#f3f3f1] py-12">
      <div className="container">
        <div className="flex flex-col items-center ">
          <div className="text-center">
            <span className="text-secondary font-semibold">Simple Pricing</span>
            <h2 className="text-[42px] text-secondary">
              Choose The Best Plan <br /> That You Want
            </h2>
            <p className="text-smallest mb-10">
              Anila coaching plans are paid monthly. We recommend <br /> at
              least 3 month commitment for the best results.
            </p>
          </div>
          <div>
            <Plan/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
