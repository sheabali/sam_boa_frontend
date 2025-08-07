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
    image: "/image 75.png",
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
    <div className="w-full mt-6 sm:mt-10 bg-white">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {promoSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#ec4141] via-[#a82b2b] to-[#9c1f1f] px-4 mb-4 lg:mb-0 sm:px-6 md:px-12 lg:px-24  text-white">
              {/* Left Content */}
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 text-center mb-12 md:text-left ">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                  SALE
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
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
                <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-md mx-auto md:mx-0">
                  {slide.subtitle}
                </p>
                <div>
                  <button className="bg-white text-black font-semibold py-2 px-5 sm:px-6 rounded-md w-max text-sm sm:text-base">
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-end">
                <div className="relative w-[200px] h-[280px] sm:w-[250px] sm:h-[320px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[700px]">
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
