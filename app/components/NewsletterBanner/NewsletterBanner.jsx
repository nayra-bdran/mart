import Image from "next/image";
import { assets } from "@/public/assets";
import SendEmail from "../Footer/SendEmail";

export default function NewsletterBanner() {
  return (
    <section className="w-full px-4 sm:px-8 py-8">
      <div className="max-w-6xl mx-auto bg-[#EC221F] text-white rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 sm:p-6 gap-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <div className="text-white rounded-full p-2 self-start sm:self-center">
            <Image
              src={assets.Container}
              alt="mail icon"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl mb-1">
              Get the Latest Deals & Updates.
            </h3>
            <p className="text-xs sm:text-sm text-[#FFFFFF]">
              Stay in the loop! Subscribe to our newsletter to receive the
              latest deals,
              <br className="hidden sm:block" />
              discounts, announcements, and expert tips on maintaining your car.
            </p>
          </div>
        </div>
          <SendEmail />
      </div>
    </section>
  );
}
