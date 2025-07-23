"use client";

import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string | number;
    name: string;
    price: number | string;
    image: string;
    views?: number;
  };
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm bg-white border-0 shadow-sm overflow-hidden">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative bg-gray-800 p-6 rounded-2xl">
          {/* Top Icons */}
          <div className="absolute left-4 right-4 flex justify-between items-center z-10">
            <button
              onClick={onToggleFavorite}
              className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Heart
                className="w-5 h-5"
                stroke="white"
                fill={isFavorite ? "white" : "none"}
              />
            </button>
            <div className="flex items-center gap-1 text-white text-sm font-medium">
              <Eye className="w-4 h-4" />
              <span>{product?.views ?? 0}</span>
            </div>
          </div>

          {/* Product Image */}
          <div className="mt-10 flex flex-col items-center justify-center w-full h-64 sm:h-72 md:h-80 lg:h-64">
            <Image
              src={product?.image}
              alt={product?.name}
              width={240}
              height={60}
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 text-center min-h-[120px]">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {product?.name}
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            ₵{product?.price}
          </p>
          <Button
            variant="outline"
            className="w-full border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 font-medium bg-transparent"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
