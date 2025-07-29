"use client";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  MoreHorizontal,
  User,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SendOffer() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [offerPrice, setOfferPrice] = useState("");
  const productImages = [
    "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
    "https://i.ibb.co/nNf1Nz3H/620126384c0b59d6a8e0bdce2d88183bbd463b4f.png",
    "https://i.ibb.co/Wpq2YhCP/b8a8e668131d8f9651b2ebb42da957a98a3b5160.png",
    "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
    "https://i.ibb.co/nNf1Nz3H/620126384c0b59d6a8e0bdce2d88183bbd463b4f.png",
  ];
  const colors = [
    { name: "Light Blue", color: "bg-blue-200" },
    { name: "Brown", color: "bg-amber-600" },
    { name: "Black", color: "bg-gray-900" },
    { name: "Pink", color: "bg-pink-500" },
  ];
  const handleOfferSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Offer submitted:", offerPrice);
    // Add logic for offer submission here
    setOfferPrice("");
  };
  // Carousel navigation functions
  const goToNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };
  const goToPreviousImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-16 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6">
          {/* Left side - Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div
              className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden group" // Added group class
              onMouseMove={(e) => {
                const { left, top, width, height } =
                  e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - left) / width) * 100;
                const y = ((e.clientY - top) / height) * 100;
                e.currentTarget.style.setProperty("--x", `${x}%`);
                e.currentTarget.style.setProperty("--y", `${y}%`);
              }}
            >
              {/* Zoom In icon (hidden on mobile) */}
              <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition block">
                <ZoomIn className="w-4 h-4 text-gray-700" />
              </div>
              {/* Navigation Arrows (hidden on mobile) */}
              <button
                onClick={goToPreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md block"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md block"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
              {/* Save and Like buttons */}
              <div className="absolute right-2 top-1/4 -translate-y-1/2 z-10 flex flex-col gap-2">
                {/* <button
                  className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md"
                  aria-label="Save product"
                >
                  <Bookmark className="w-5 h-5 text-gray-700" />
                </button> */}
                <button
                  className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md flex items-center justify-center gap-1"
                  aria-label="Like product"
                >
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt="Nike Dunk Low"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out md:group-hover:scale-150"
                style={{
                  transformOrigin: "var(--x, 50%) var(--y, 50%)",
                }}
                priority
              />
              {/* Pagination Dots (hidden on mobile) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-2 h-2 rounded-full ${
                      selectedImage === index ? "bg-white" : "bg-gray-400"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Thumbnail images */}
            <div className="block">
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {productImages.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Nike Dunk Low view ${index + 1}`}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Right side - Product info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Nike Dunk Low
              </h1>
              <Link href="/">
                <Image
                  src="/Vector.svg"
                  alt="Nike Dunk Low"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 "
                />
              </Link>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tortor egestas dignissim
              dictumst phasellus. Mi morbi dapibus enim vulputate ultrices
              morbi. Amet sollicitudin ultrices ipsum justo fringilla mattis.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs sm:text-sm">
                #Vintage
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                #Trouser
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                #Bluepant
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                #Specialpant
              </Badge>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                Seller
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                    <Image
                      src="https://i.ibb.co/zhzTCLG9/c09dcf1249bb3a1970432e49ed7556abc36410c3.png"
                      alt="Seller profile"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">
                      Andre Sophia
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      @sophia_fashion
                    </p>
                  </div>
                </div>
                <Link href={`/seller_profile/1`}>
                  <div className="flex items-center gap-2">
                    <Button className="text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                      <User className="h-4 w-4 mr-1 sm:mr-2" />
                      Follow
                    </Button>
                    <Button
                      variant="outline"
                      className="hover:text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 bg-transparent"
                      size="sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button
                      className="hover:text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 bg-transparent"
                      variant="outline"
                      size="sm"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block border-2 border-gray-300 rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-xl sm:text-2xl font-bold">₵70.00</span>
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                Available Colors
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-colors ${
                      color.color
                    } ${index === 0 ? "border-gray-900" : "border-gray-300"}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">UK 8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Brand:</span>
                <span className="font-medium">Veja</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Condition:</span>
                <span className="font-medium">Used - Fair</span>
              </div>
            </div>
            <div className="flex justify-end mt-8 sm:mt-12">
              <Image
                src="/Group.svg"
                alt="Product quality badge"
                width={48}
                height={48}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4 w-full px-4 sm:px-6 py-6 sm:py-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
            Make an Offer
          </h2>
          <form
            onSubmit={handleOfferSubmit}
            className="space-y-4 max-w-md mx-auto"
          >
            <div className="space-y-3">
              <input
                type="number"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                placeholder="₵224.00"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-3xl text-center text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
              <Button
                type="submit"
                className="w-full bg-maroon-700 text-white py-2 sm:py-3 rounded-3xl text-sm sm:text-base hover:bg-maroon-800"
              >
                Send Offer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
