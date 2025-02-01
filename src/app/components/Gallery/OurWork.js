"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import galleryImage1 from "/public/image/gallery-01.webp";
import galleryImage2 from "/public/image/gallery-03.webp";
import galleryImage3 from "/public/image/gallery-04.webp";
import galleryImage4 from "/public/image/gallery-05.webp";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const data = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage2,
  galleryImage3,
  galleryImage1,
  galleryImage4,
];

export default function OurWork() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Swiper 
      dir="ltr"
        slidesPerView={2}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="gallery"
              width={300}
              height={300}
              loading="lazy"
              className="cursor-pointer"
              onClick={() => setSelectedImage(item)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="gallery"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <IoMdClose size={25} className="text-red-600" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
