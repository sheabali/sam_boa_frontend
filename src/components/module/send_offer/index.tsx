"use client";

import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { MessageCircle, MoreHorizontal, User } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto my-[150px] bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Left side - Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={productImages[selectedImage]}
                alt="Nike Dunk Low"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
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
                    src={image}
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
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold text-gray-900">
                Nike Dunk Low
              </h1>
              <Link href="/">
                <Image
                  src="/Frame.svg"
                  alt="Nike Dunk Low"
                  width={50}
                  height={50}
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tortor egestas dignissim
              dictumst phasellus. Mi morbi dapibus enim vulputate ultrices
              morbi. Amet sollicitudin ultrices ipsum justo fringilla mattis.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">#Vintage</Badge>
              <Badge variant="secondary">#Trouser</Badge>
              <Badge variant="secondary">#Bluepant</Badge>
              <Badge variant="secondary">#Specialpant</Badge>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Seller</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <Image
                      src="https://i.ibb.co/mVjzdhHW/Rectangle-23852.png"
                      alt="Nike Dunk Low"
                      width={50}
                      height={50}
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Andre Sophia</p>
                    <p className="text-sm text-gray-500">@sophia_fashion</p>
                  </div>
                </div>
                <Link href={`/seller_profile/1`}>
                  <div className="flex items-center gap-2">
                    <Button className=" text-white">
                      <User className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                    <Button
                      variant="outline"
                      className=" hover:text-white"
                      size="sm"
                    >
                      <MessageCircle className="h-4 w-4 " />
                    </Button>
                    <Button
                      className="hover:text-white"
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
              <div className="inline-block border-2 border-gray-300 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">₵70.00</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Available Colors</h3>
              <div className="flex gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 transition-colors ${
                      color.color
                    } ${index === 0 ? "border-gray-900" : "border-gray-300"}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2 text-sm">
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
            <div className="flex justify-end mt-32">
              <Image
                src="/Group.svg"
                alt="Nike Dunk Low"
                width={50}
                height={50}
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4 w-full px-4 my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Make an offer
          </h2>
          <form onSubmit={handleOfferSubmit} className="space-y-4">
            <div className=" gap-4">
              <input
                type="number"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                placeholder="₵224.00"
                className="w-full p-2 border border-gray-300 rounded-3xl text-center"
              />
              <Button
                type="submit"
                className="w-full bg-maroon-700 mt-3 text-white py-3 rounded-3xl"
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
