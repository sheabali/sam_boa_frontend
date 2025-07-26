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
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => onMarkAsSold(product.id)}
              className="text-white rounded-full px-4 py-2"
            >
              Mark as sold
            </Button>
            <Button
              variant="outline"
              onClick={() => onEdit(product.id)}
              className="px-4 py-2 hover:text-white"
            >
              <Edit className="w-4 h-4 mr-1 " />
              Edit
            </Button>
          </div>
        );
      case "sold":
        return (
          <Button
            onClick={() => onDelete(product.id)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        );
      case "draft":
        return (
          <div className="flex gap-2">
            <Button
              onClick={() => onPost(product.id)}
              className=" text-white px-6 py-2 rounded-md"
            >
              Post
            </Button>
            <Button
              variant="outline"
              onClick={() => onDelete(product.id)}
              className=" hover:text-white hover:bg-gray-100"
            >
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>
        );
      default:
        return (
          <Link href={`/seller/dashboard/my_products/${product.id}`}>
            <Button
              variant="outline"
              onClick={() => onEdit(product.id)}
              className="px-4 py-2 bg-primary text-white border-none"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </Link>
        );
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 mb-3">
      <div className="flex items-center gap-7">
        <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mb-[6px]">
                Available Colors
              </span>
            </div>
            <div className="flex gap-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-1 mt-3 text-sm text-gray-600">
              <span>Size: {product.size}</span>
              <span>Brand: {product.brand}</span>
              <span>Condition: {product.condition}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">{renderActionButtons()}</div>
    </div>
  );
}
