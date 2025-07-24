/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Button from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sellers = [
  {
    id: 1,
    name: "Robert Fox",
    handle: "@joseph_style",
    followers: "2.3k followers",
    image: "https://i.ibb.co/GZChyWh/Frame-31.png",
    bgColor: "bg-slate-800",
  },
  {
    id: 2,
    name: "Devon Lane",
    handle: "@joseph_style",
    followers: "2.3k followers",
    image: "https://i.ibb.co/C50tGMgd/Frame-30.png",
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    name: "Jerome Bell",
    handle: "@joseph_style",
    followers: "2.3k followers",
    image: "https://i.ibb.co/fzCXmvbQ/Frame-29.png",
    bgColor: "bg-teal-200",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    handle: "@joseph_style",
    followers: "2.5k followers",
    image: "https://i.ibb.co/KcqmbGqs/Frame-32.png",
    bgColor: "bg-gray-200",
  },
  {
    id: 5,
    name: "Kristin Watson",
    handle: "@fashion_guru",
    followers: "3.1k followers",
    image: "https://i.ibb.co/C50tGMgd/Frame-30.png",
    bgColor: "bg-purple-200",
  },
  {
    id: 6,
    name: "Darrell Steward",
    handle: "@style_master",
    followers: "2.8k followers",
    image: "https://i.ibb.co/GZChyWh/Frame-31.png",
    bgColor: "bg-blue-200",
  },
];

export default function TopSellersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useState(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setCardsPerView(getCardsPerView());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  const maxIndex = Math.max(0, sellers.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleSellers = sellers.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Top sellers this week
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Most followed, most bids, most stylish. Follow your favorites and
          explore their closets.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative mb-8">
        {/* Seller Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              width: `${(sellers.length / cardsPerView) * 100}%`,
            }}
          >
            {sellers.map((seller) => (
              <div
                key={seller.id}
                className="flex-shrink-0"
                style={{ width: `${100 / sellers.length}%` }}
              >
                <Link href={`/seller_profile/${seller.handle}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gray-900">
                    {/* Background Image */}
                    <Image
                      src={seller.image || "/placeholder.svg"}
                      alt={seller.name}
                      fill
                      className="object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute  bottom-0 left-0 right-0 p-6 text-white bg-transparent">
                      <h3 className="font-semibold text-xl mb-2">
                        {seller.name}
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        {seller.handle}
                      </p>
                      <div className="flex items-center gap-2 text-white/90">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{seller.followers}</span>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="rounded-full w-12 h-12 border-gray-300 hover:bg-gray-50 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-900 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          disabled={currentIndex === maxIndex}
          className="rounded-full w-12 h-12 border-gray-300 hover:bg-gray-50 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </Button>
      </div>

      {/* Progress indicator */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {currentIndex + 1} -{" "}
        {Math.min(currentIndex + cardsPerView, sellers.length)} of{" "}
        {sellers.length}
      </div>
    </div>
  );
}
