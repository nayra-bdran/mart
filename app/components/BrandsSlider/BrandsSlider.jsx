"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { assets } from "@/public/assets";

export default function BrandsSlider() {
  const brands = [
    assets.img1,
    assets.img2,
    assets.img3,
    assets.img4,
    assets.img5,
    assets.img6,
    assets.img7,
    assets.img8,
    assets.img9,
    assets.img10,
    assets.img11,
    assets.img12,
    assets.img13,
    assets.img14,
    assets.img15,
    assets.img16,
    assets.img17,
    assets.img18,
  ];

  return (
    <section className="w-full px-4 sm:px-8 py-18">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        navigation
        className="w-full max-w-6xl mx-auto custom-swiper-nav"
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index} className="!w-[90px] ">
            <div className="grid grid-rows-2 gap-4 h-full justify-items-center px-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white shadow flex items-center justify-center p-1 sm:p-2">
                <Image
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  width={40}
                  height={40}
                  className="object-cover"
                  
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white shadow flex items-center justify-center p-1 mb-2 sm:p-2">
                <Image
                  src={brands[(index + 1) % brands.length]} 
                  alt={`Brand ${index + 2}`}
                  width={40}
                  height={40}
                  className="object-cover"
                  
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
