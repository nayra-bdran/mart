import { assets } from "@/public/assets";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[590px]">
      <Image
        src={assets.heroImg}
        alt="Auto Parts"
        fill
        className="object-cover object-[70%] sm:object-center"
        priority
        
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6">
          Auto Parts
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-black font-semibold leading-relaxed mb-4 sm:mb-6">
          We scan the market, <br className="hidden sm:block" />
          compare prices, <br className="hidden sm:block" />
          and recommend the best deals
        </p>
        <button className="bg-[#EC221F] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base w-32 sm:w-40">
          Inquire Now
        </button>
      </div>
    </section>
  );
}
