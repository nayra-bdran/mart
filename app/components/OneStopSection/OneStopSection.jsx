import { assets } from "@/public/assets";
import Image from "next/image";

export default function OneStopSection() {
  return (
    <section className="w-full px-4 sm:px-8 mt-12 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-[36px] font-bold text-black mb-6 ">
            Your One-Stop Shop For
            <br />
            <span className="text-black">Auto Parts In the UAE</span>
          </h2>
          <p className="text-sm sm:text-[20px] text-[#000000] mb-4 line-clamp-2 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <p className="sm:text-[20px] text-sm  text-[#000000]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five <br />
            centuries,
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Image src={assets.FinalDirection} alt="icon1" />
        </div>
      </div>
    </section>
  );
}
