import React from "react";
import dynamic from "next/dynamic";

const WelcomeContainer = dynamic(() => import("../components/WelcomeSection"));
const Pricing = dynamic(() => import("../components/pricing/Pricing"));
const Benefits = dynamic(() => import("../components/Benefits"));
const OurService = dynamic(() => import("../components/OurService"));
const Gallery = dynamic(() => import("../components/Gallery/Gallery"));

const Page = () => {
  return (
    <div>
      <WelcomeContainer />
      <Pricing />
      <Benefits />
      <OurService />
      <Gallery />
    </div>
  );
};

export default Page;
