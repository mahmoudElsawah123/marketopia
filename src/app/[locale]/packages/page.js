import Pricing from "@/app/components/pricing/Pricing";
import React from "react";
import PagesBanner from "@/app/components/PagesBanner";

export const metadata = {
  title: "packages"
};

const page = () => {
  return (
    <div>
      <PagesBanner title={"Pick your perfect plan"} subtitle={"packages"} />
      <Pricing />
    </div>
  );
};

export default page;
