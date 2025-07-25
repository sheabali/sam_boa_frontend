import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Seller() {
  return (
    <div className="relative w-full h-[911px] rounded-lg overflow-hidden">
      {/* The main image that includes the person, VINE logo, and the red background */}
      <Image
        src="/Group 18.svg"
        alt="Woman posing with a stylized VINE logo"
        fill
        priority
        className="object-cover object-left"
        sizes="100vw"
      />

      {/* Content overlayed on the right side of the image */}
      <div className="absolute inset-0 flex items-center justify-end p-4 md:p-8 lg:p-12">
        <div className="relative z-10 max-w-lg text-white right-60 space-y-6   ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Start Selling Your Style on Vine
          </h1>
          <p className="text-base md:text-lg">
            Whether you&apos;re flipping vintage finds, promoting your fashion
            brand, or just cleaning your closet – Vine is where your wardrobe
            turns into income.
          </p>
          <Link href="/seller/register">
            <button className="bg-white text-black   rounded-full px-8 py-4 text-base font-semibold flex items-center gap-2 shadow-lg">
              Become a seller
              <ArrowRight className="w-8 h-8 bg-primary  rounded-full text-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
