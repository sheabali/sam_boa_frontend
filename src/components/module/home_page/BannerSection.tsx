"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffdcb7] via-[#fff5f1] to-[#ffe2d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Style has a new <br className="hidden sm:block" />
                Marketplace -{" "}
                <span className="text-red-800 inline-block">VINE</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover Fashion You Love. Bid With Confidence. Sell With Ease.
                Join A Community of Bold Buyers And Creative Sellers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/explore">
                <Button
                  className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-full text-base font-medium"
                  size="lg"
                >
                  Explore
                </Button>
              </Link>
              <Link href="/seller">
                <Button
                  variant="outline"
                  className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 py-3 rounded-full text-base font-medium"
                  size="lg"
                >
                  Become a Seller
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <div>
                <Image
                  src="/Rectangle 499.png"
                  alt="Social Proof"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Avatar
                    key={num}
                    className="w-9 h-9 border-2 border-white bg-white"
                  >
                    <AvatarImage src={`/Ellipse 4.png`} alt={`User ${num}`} />
                    <AvatarFallback>U{num}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  24K+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Active Users
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Images */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end">
              <div className="col-span-1">
                <Image
                  src="/image4.png"
                  alt="Fashion Model 1"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/image5.png"
                  alt="Fashion Model 2"
                  width={800}
                  height={700}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
