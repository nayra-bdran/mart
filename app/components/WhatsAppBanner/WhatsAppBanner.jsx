

import { assets } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

function WhatsAppBanner() {
  return (
 <section className="w-full px-4 sm:px-8 ">
      <div className="max-w-6xl mx-auto  overflow-hidden">
        <Image
          src={assets.banner2}
          alt="Van Banner"
          width={1200}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>  )
}

export default WhatsAppBanner