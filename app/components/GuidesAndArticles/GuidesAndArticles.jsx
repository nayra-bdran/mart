"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { assets } from "@/public/assets";

export default function GuidesAndArticles() {
  const articles = [
    {
      image: assets.Container1,
      title: "The number of new cars sold over 20 years",
    },
    {
      image: assets.Container2,
      title: "Warning lights indicating activation of various systems",
    },

    {
      image: assets.Container3,
      title: "What to know about changing the engine oil and oil filters",
    },
    {
      image: assets.Container1,
      title: "The number of new cars sold over 20 years",
    },
    {
      image: assets.Container2,
      title: "Warning lights indicating activation of various systems",
    },

    {
      image: assets.Container3,
      title: "What to know about changing the engine oil and oil filters",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-white relative">
      <button
        className="absolute bottom-0 right-6 p-4  hover:scale-105 transition duration-300"
        aria-label="Open Chat"
      >
        <Image src={assets.SVG} alt="Open Chat" width={50} height={50} />
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div>
          <h2 className="text-xl sm:text-[20px] font-bold mb-4">
            Guides and articles
          </h2>
          <p className="text-sm text-[#9A9A9A] mb-6">
            Articles and Guides that are written with the help of mechanics to
            ensure you have all the knowledge you need to make the correct
            purchase here at Mobex.
          </p>
          <button className="border-2 border-[#111111] px-4 py-2 rounded-md font-medium font-semibold text-sm text-[#111111]">
            Read more
          </button>
        </div>
        <div className="lg:col-span-3">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            className="guides-swiper"
          >
            {articles.map((item, index) => (
              <SwiperSlide key={index} className="!w-[220px]">
                <div className="w-[220px] mx-auto overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={160}
                    className="object-cover rounded-md"
                  />
                  <p className="text-[13px] font-medium text-black text-center p-2 leading-snug break-words">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
