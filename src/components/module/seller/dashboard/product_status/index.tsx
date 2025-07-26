/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  availableColors: string[];
  size: string;
  service: string;
  condition: string;
  status: "in-transit" | "confirmed" | "received";
}

const products: Product[] = [
  {
    id: "1",
    name: "Nike Dunk Low",
    image:
      "https://i.ibb.co/nNf1Nz3H/620126384c0b59d6a8e0bdce2d88183bbd463b4f.png",
    availableColors: ["#E5E7EB", "#EF4444", "#8B5CF6"],
    size: "UK 8",
    service: "Vip",
    condition: "Used - Fair",
    status: "in-transit",
  },
  {
    id: "2",
    name: "Nike Dunk Low",
    image:
      "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
    availableColors: ["#E5E7EB", "#3B82F6", "#1F2937", "#EF4444"],
    size: "UK 8",
    service: "Vip",
    condition: "Used - Fair",
    status: "confirmed",
  },
  {
    id: "3",
    name: "Nike Dunk Low",
    image:
      "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
    availableColors: ["#E5E7EB", "#3B82F6", "#1F2937", "#EF4444"],
    size: "UK 8",
    service: "Vip",
    condition: "Used - Fair",
    status: "received",
  },
  {
    id: "4",
    name: "Nike Dunk Low",
    image:
      "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
    availableColors: ["#E5E7EB", "#3B82F6", "#1F2937", "#EF4444"],
    size: "UK 8",
    service: "Vip",
    condition: "Used - Fair",
    status: "confirmed",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "in-transit":
      return (
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          In transit
        </Badge>
      );
    case "confirmed":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Confirmed
        </Badge>
      );
    case "received":
      return (
        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
          Received
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getActionButton = (
  status: string,
  productId: string,
  onUpdateClick: (id: string) => void
) => {
  if (status === "received") {
    return (
      <Button className="bg-red-800 hover:bg-red-900 text-white" size="sm">
        See Review
      </Button>
    );
  }
  return (
    <Button
      className="bg-red-800 hover:bg-red-900 text-white"
      size="sm"
      onClick={() => onUpdateClick(productId)}
    >
      Update Status
    </Button>
  );
};

export default function ProductStatusPage() {
  const router = useRouter();

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const handleUpdateClick = (productId: string) => {
    console.log("Updating status for product ID:", productId);
    setSelectedProductId(productId);
    router.push(`/seller/dashboard/product_status/${productId}`);
  };

  //   const handleCloseModal = () => {
  //     setSelectedProductId(null);
  //   };

  //   const selectedProduct = products.find((p) => p.id === selectedProductId);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Product Status
        </h1>

        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        {getStatusBadge(product.status)}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">
                            Available Colors
                          </span>
                          <div className="flex space-x-1">
                            {product.availableColors.map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full border border-gray-300"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-4 text-sm text-gray-600">
                          <span>
                            Size:{" "}
                            <span className="font-medium">{product.size}</span>
                          </span>
                          <span>
                            Service:{" "}
                            <span className="font-medium">
                              {product.service}
                            </span>
                          </span>
                        </div>

                        <div className="text-sm text-gray-600">
                          Condition:{" "}
                          <span className="font-medium">
                            {product.condition}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4">
                    {getActionButton(
                      product.status,
                      product.id,
                      handleUpdateClick
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
