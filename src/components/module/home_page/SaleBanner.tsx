"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const promoSlides = [
  {
    title: "Enjoy up to 70% off!",
    subtitle:
      "Grab your limited-time discount and enjoy 70% off on all our products.",
    image: "/image 75.png", // Add your actual images
  },
  {
    title: "Flash Sale!",
    subtitle: "Exclusive deals for a short time only.",
    image: "/image 75.png",
  },
  {
    title: "Free Shipping!",
    subtitle: "On all orders over $50.",
    image: "/image 75.png",
  },
  {
    title: "New Arrivals!",
    subtitle: "Shop the latest trends in fashion.",
    image: "/image 75.png",
  },
];

export default function PromoBannerSlider() {
  return (
    <div className="w-full mt-10 bg-white">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {promoSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#ec4141] via-[#a82b2b] to-[#9c1f1f] px-6 lg:px-24 py-1 lg:py-1 text-white">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <p className="text-sm font-bold uppercase tracking-wider">
                  SALE
                </p>
                <h1 className="text-3xl lg:text-6xl font-extrabold">
                  {slide.title.split("70%").map((part, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i}>
                        <span className="text-yellow-300">70%</span>
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </h1>
                <p className="text-base lg:text-lg opacity-90 max-w-md">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-black font-semibold py-2 px-6 rounded-md w-max">
                  SHOP NOW
                </button>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative flex justify-end">
                <div className="relative w-[250px] h-[350px] lg:w-[400px] lg:h-[700px]">
                  <Image
                    src={slide.image}
                    alt="Promo Image"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
