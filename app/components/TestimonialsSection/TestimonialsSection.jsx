"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Smith",
      feedback:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      name: "Alex Smith",
      feedback:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      name: "Alex Smith",
      feedback:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      name: "Alex Smith",
      feedback:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      name: "Alex Smith",
      feedback:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      name: "Alex Smith",
      feedback:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      name: "Alex Smith",
      feedback:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 py-16  ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[35px] font-bold mb-2 sm:mb-10 text-center">
          What Our Customers Say?
        </h2>

        <Swiper
          className="custom-swiper-nav "
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="lg:!mr-0 lg:!w-[330px]">
              <div className=" rounded-lg p-4 text-left px-13">
                <h4 className="font-bold text-sm mb-2">{item.name}</h4>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
