import PagesBanner from "@/app/components/PagesBanner";
import ServiceGroup from "@/app/components/ServiceGroup";
import React from "react";

const page = () => {
  return (
    <div>
      <PagesBanner title={"Our Services"} subtitle={"Service"} />
      <ServiceGroup />
    </div>
  );
};

export default page;
