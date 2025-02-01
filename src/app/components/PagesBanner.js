import Image from "next/image";
import React from "react";
import cover from "/public/image/service-breacumb-2.webp";
import Link from "next/link";
const PagesBanner = ({ title, subtitle }) => {
  return (
    <div className="relative h-[350px] w-full">
      <Image src={cover} alt="cover" fill className="object-cover" loading="lazy"/>
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white">
        <h1 className="md:text-[42px] text-[30px] font-semibold">{title}</h1>
        <div className="breadcrumbs text-md font-semibold">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[#f3bf5b]">{subtitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PagesBanner;
