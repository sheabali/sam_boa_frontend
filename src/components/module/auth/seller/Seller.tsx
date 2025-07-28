"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Seller() {
  return (
    <div className="relative w-full h-[800px] sm:h-[600px] md:h-[800px] lg:h-[911px] rounded-lg overflow-hidden">
      {/* Background image */}
      <Image
        src="/Group 18.svg"
        alt="Woman posing with a stylized VINE logo"
        fill
        priority
        className="object-cover w-full sm:h-auto object-left sm:object-center"
        sizes="100vw"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center sm:justify-end p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="relative z-10 max-w-sm sm:max-w-md lg:max-w-lg text-white space-y-4 sm:space-y-6 w-full sm:w-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Start Selling Your Style on Vine
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Whether you&apos;re flipping vintage finds, promoting your fashion
            brand, or just cleaning your closet – Vine is where your wardrobe
            turns into income.
          </p>
          <Link href="/seller/register">
            <button className="bg-white text-black rounded-full px-6 sm:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-colors">
              Become a seller
              <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8 bg-primary rounded-full text-white p-1 sm:p-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
