// Updated ProductCard.tsx with responsive design using Tailwind CSS
// - Adjusted flex layout to stack vertically on mobile (flex-col) and row on larger screens (sm:flex-row)
// - Scaled image size and text for better readability on small screens
// - Optimized button sizes and spacing for touch interactions
// - Ensured color dots and other UI elements scale appropriately
// - Used Tailwind's responsive utilities (sm:, md:, lg:) for adaptive layouts

"use client";

import Button from "@/components/ui/button";
import { TProduct } from "@/types/product.type";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: TProduct;
  activeTab: string;
  onMarkAsSold: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onPost: (id: string) => void;
}

export default function ProductCard({
  product,
  activeTab,
  onMarkAsSold,
  onEdit,
  onDelete,
  onPost,
}: ProductCardProps) {
  const renderActionButtons = () => {
    switch (activeTab) {
      case "unsold":
        return (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              size="sm"
              onClick={() => onMarkAsSold(product.id)}
              className="text-white rounded-full px-4 py-2 text-sm sm:text-base"
            >
              Mark as sold
            </Button>
            <Button
              variant="outline"
              onClick={() => onEdit(product.id)}
              className="px-4 py-2 text-sm sm:text-base hover:text-white"
            >
              <Edit className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              Edit
            </Button>
          </div>
        );
      case "sold":
        return (
          <Button
            onClick={() => onDelete(product.id)}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        );
      case "draft":
        return (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              onClick={() => onPost(product.id)}
              className="text-white px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base"
            >
              Post
            </Button>
            <Button
              variant="outline"
              onClick={() => onDelete(product.id)}
              className="p-2 hover:text-white hover:bg-gray-100"
            >
              <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        );
      default:
        return (
          <Link href={`/seller/dashboard/my_products/${product.id}`}>
            <Button
              variant="outline"
              onClick={() => onEdit(product.id)}
              className="px-4 py-2 bg-primary text-white border-none text-sm sm:text-base"
            >
              <Edit className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              Edit
            </Button>
          </Link>
        );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-gray-200 mb-3 sm:mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 lg:gap-7 w-full">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
            {product.name}
          </h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-[6px]">
                Available Colors
              </span>
            </div>
            <div className="flex gap-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-1 mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
              <span>Size: {product.size}</span>
              <span>Brand: {product.brand}</span>
              <span>Condition: {product.condition}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-3 sm:mt-0">
        {renderActionButtons()}
      </div>
    </div>
  );
}
