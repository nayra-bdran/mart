import { assets } from "@/public/assets";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="w-full px-4 sm:px-8 mt-18">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl sm:text-[40px] font-bold text-black mb-8">
            How this work
          </h2>
          <p
            className="font-medium sm:text-[20px] text-sm text-[#000000] mb-6"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p
            className="font-medium sm:text-[20px] text-sm text-[#000000]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an <br /> unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five <br /> centuries,
          </p>
        </div>

        <div className="flex sm:justify-center lg:justify-end order-2 lg:order-1 -ml-6">
          <Image
            src={assets.stepsImg}
            alt="Steps illustration"
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
