"use client";

import { assets } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Auto Parts", href: "/auto-parts" },
  { name: "Batteries", href: "/batteries" },
  { name: "Tyres", href: "/tyres" },
  { name: "Rims", href: "/rims" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image src={assets.logo} width={110} alt="logo" />
        </div>
        <nav className="hidden md:flex gap-6 font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={` transition ${
                pathname === link.href ? "text-red-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="bg-red-600  text-white px-4 py-2 rounded-md font-semibold text-sm hidden md:block">
            Get Quote
          </button>

          <Image
            src={assets.icon}
            alt="Profile"
            width={20}
            height={20}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col items-center text-sm">
            <BsCart2 className="text-xl" />
            <span className="text-xs">£0.00</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-2 text-2xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-3 font-medium p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 px-2 rounded  ${
                pathname === link.href ? "text-red-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-4 bg-red-600  text-white px-4 py-2 rounded-md font-semibold text-sm w-full">
            Get Quote
          </button>
        </nav>
      </div>
    </div>
  );
}
