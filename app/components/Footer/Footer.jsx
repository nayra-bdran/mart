import { assets } from "@/public/assets";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import inputEmail from "./SendEmail"
import SeendEmail from "./SendEmail";
export default function Footer() {
  return (
    <footer className="bg-[#111] text-white px-8 py-12">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Products */}
        <div>
          <h3 className="text-[15px] font-bold mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-[#BDBDBD]">
            <li>Auto Parts</li>
            <li>Batteries</li>
            <li>Tyres</li>
            <li>Rims</li>
            <li>All Products</li>
          </ul>
          <div className="mt-14">
            <Image src={assets.payment} alt="Payment Methods" />
          </div>
        </div>

        {/* Help and Support */}
        <div>
          <h3 className="text-[15px] font-bold mb-4">Help and Support</h3>
          <ul className="space-y-2 text-sm text-[#BDBDBD]">
            <li>Track My Order</li>
            <li>Contact us</li>
            <li>My account</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-[15px] font-bold mb-4">About US</h3>
          <ul className="space-y-2 text-sm text-[#BDBDBD]">
            <li>Why O2Mart?</li>
            <li>Become Partner</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Warranty & Returns Policy</li>
          </ul>
        </div>

        {/* Logo and Contact Info */}
        <div className="">
          <Image
            src={assets.logo}
            alt="O2Mart Logo"
            className="mb-4"
            width={120}
            height={40}
          />
          <p className="text-sm text-[#BDBDBD] mb-4 leading-relaxed">
            Customer Service Hours
            <br />
            Monday–Friday: <br /> 7:00am–8:00pm.
            <br />
            Sunday: Closed.
          </p>
          <div className="flex gap-4 mb-6 text-lg">
            <FaFacebookF className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-red-500 cursor-pointer" />
          </div>
          <div className="mt-10">
            <p className="text-sm text-[#EC221F] mb-2 font-medium">
              Get the Latest Deals & Updates
            </p>
           <SeendEmail/>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#222222] pt-6 text-center text-xs text-[#FFFFFF]">
        Copyright © 2025 O2Mart. All Rights Reserved{" "}
      </div>
    </footer>
  );
}
