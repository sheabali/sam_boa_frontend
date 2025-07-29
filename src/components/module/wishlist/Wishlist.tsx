"use client";

import Button from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Nike Dunk Low",
      price: "₵24.00",
      imageSrc:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
    },
    {
      id: "2",
      name: "Nike Dunk Low",
      price: "₵44.00",
      imageSrc:
        "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
    },
    {
      id: "3",
      name: "Nike Dunk Low",
      price: "₵244.00",
      imageSrc:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
    },
    {
      id: "4",
      name: "Nike Dunk Low",
      price: "₵244.00",
      imageSrc:
        "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
    },
    {
      id: "5",
      name: "Nike Dunk Low",
      price: "₵244.00",
      imageSrc:
        "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
    },
  ]);

  const handleRemoveFromWishlist = (itemId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Wishlist
      </h1>
      <h2 className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-6">
        My Watch List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-gray-100 p-4 rounded-lg shadow-sm gap-4"
          >
            {/* Left: Image & Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto flex-1">
              <Image
                src={item.imageSrc || "/placeholder.svg"}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md object-cover bg-gray-200 w-[100px] h-[100px]"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold">
                  {item.name}
                </h3>
                <p className="text-gray-800 text-lg sm:text-xl font-bold">
                  {item.price}
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col sm:flex-row sm:justify-end items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </button>
              <Button className="bg-[#8B0000] hover:bg-[#6A0000] text-white h-10 md:h-11 px-6 sm:px-10 rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto">
                Buy Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
