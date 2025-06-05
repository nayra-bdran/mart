"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { assets } from "@/public/assets";

export default function CategoriesSwiper() {
  const categories = [
    assets.image,
    assets.image,
    assets.image,
    assets.image,
    assets.image,
  ];

  return (
    <section className=" py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Categories
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full custom-swiper-nav relative overflow-visible"
        >
          {categories.map((img, index) => (
            <SwiperSlide key={index} className="lg:!mr-0 lg:!w-[330px]">
              <div className="flex justify-center  px-6">
                <Image
                  src={img}
                  alt={`Category ${index + 1}`}
                  width={390}
                  height={250}
                  className=""
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
