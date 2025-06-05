import { assets } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

function SendEmail() {
  return (
         <form className="relative max-w-sm w-full">
              <input
                type="email"
                placeholder="Email address"
                className="w-full  pl-6 py-3 pr-10 rounded-md text-xs  text-[#9A9A9A] bg-[#FFFFFF] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Image
                  src={assets.arrowIcon}
                  alt="Submit"
                  width={20}
                  height={20}
                />
              </button>
            </form>
    
  )
}

export default SendEmail