"use client";

import FeaturedProducts from "@/components/module/products/FeaturedProducts";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { MessageCircle, MoreHorizontal, User, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

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

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-16 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6">
          {/* Left side - Images */}
          <div className="space-y-4">
            {/* Main image with hover zoom */}
            <div
              className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden group"
              onMouseMove={(e) => {
                if (window.innerWidth >= 768) {
                  // Disable zoom effect on mobile
                  const { left, top, width, height } =
                    e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - left) / width) * 100;
                  const y = ((e.clientY - top) / height) * 100;
                  e.currentTarget.style.setProperty("--x", `${x}%`);
                  e.currentTarget.style.setProperty("--y", `${y}%`);
                }
              }}
            >
              {/* Zoom Icon (hidden on mobile) */}
              <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                <ZoomIn className="w-4 h-4 text-gray-700" />
              </div>

              {/* Zoomable Image */}
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
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {productImages.map((image, index) => (
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

          {/* Right side - Product info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Nike Dunk Low
              </h1>
              <Link href="/">
                <Image
                  src="/Frame.svg"
                  alt="Nike Dunk Low"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
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
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
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
                <Link href={`/seller_profile/${1}`}>
                  <div className="flex items-center gap-2">
                    <Button className="text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                      <User className="h-4 w-4 mr-1 sm:mr-2" />
                      Follow
                    </Button>
                    <Button
                      variant="outline"
                      className="hover:text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                      size="sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button
                      className="hover:text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
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

            {/* Available Colors */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                Available Colors
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-colors ${
                      color.color
                    } ${
                      selectedColor === index
                        ? "border-gray-900"
                        : "border-gray-300"
                    }`}
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

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4">
              <Button className="flex-1 text-white py-2 sm:py-3 text-xs sm:text-sm">
                Accept price
              </Button>
              <Link href={`/send_offer/${1}`}>
                <Button
                  variant="outline"
                  className="text-black hover:text-white flex-1 py-2 sm:py-3 text-xs sm:text-sm"
                >
                  Make offer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold px-4 mt-12 sm:mt-16 lg:mt-20">
        <h1>Featured Products</h1>
        <FeaturedProducts />
      </div>
    </div>
  );
}
