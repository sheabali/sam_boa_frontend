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
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-3">
            <Button
              size="sm"
              onClick={() => onMarkAsSold(product.id)}
              className="w-full sm:w-auto text-white rounded-full px-4 py-2 text-sm sm:text-base"
            >
              Mark as sold
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEdit(product.id)}
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base hover:text-white"
            >
              <Edit className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              Edit
            </Button>
          </div>
        );
      case "sold":
        return (
          <Button
            size="sm"
            onClick={() => onDelete(product.id)}
            className="text-gray-500 hover:text-gray-700 px-5 py-2"
          >
            <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        );
      case "draft":
        return (
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-3">
            <Button
              size="sm"
              onClick={() => onPost(product.id)}
              className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base"
            >
              Post
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDelete(product.id)}
              className="w-full sm:w-auto p-2 hover:text-white hover:bg-gray-100"
            >
              <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        );
      default:
        return (
          <Link
            href={`/seller/dashboard/my_products/${product.id}`}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(product.id)}
              className="w-full sm:w-auto px-4 py-2 bg-primary text-white border-none text-sm sm:text-base"
            >
              <Edit className="w-3 h-3 sm:w-5 sm:h-5 mr-1" />
              Edit
            </Button>
          </Link>
        );
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-lg border border-gray-200 mb-4 sm:mb-5">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        {/* Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl line-clamp-2">
            {product.name}
          </h3>

          {/* Colors */}
          <div className="flex flex-col gap-1">
            <span className="text-xs sm:text-sm text-gray-600">
              Available Colors
            </span>
            <div className="flex gap-1 flex-wrap">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-1 mt-2 text-xs sm:text-sm text-gray-600">
            <span>Size: {product.size}</span>
            <span>Brand: {product.brand}</span>
            <span>Condition: {product.condition}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full sm:w-auto">{renderActionButtons()}</div>
    </div>
  );
}
