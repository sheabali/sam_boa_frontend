"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProductCard from "../../Product/product-card";

// All available products
const allProducts = [
  {
    id: 1,
    name: 'Nike Dunk Low "Panda"',
    price: "70.00",
    image:
      "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
    views: 32,
  },
  {
    id: 2,
    name: "Vintage Cargo Pants",
    price: "70.00",
    image:
      "https://i.ibb.co/Wpq2YhCP/b8a8e668131d8f9651b2ebb42da957a98a3b5160.png",
    views: 32,
  },
  {
    id: 3,
    name: "Yeezy Boost 350",
    price: "70.00",
    image:
      "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
    views: 32,
  },
  {
    id: 4,
    name: "Yeezy Boost 350",
    price: "70.00",
    image:
      "https://i.ibb.co/Wpq2YhCP/b8a8e668131d8f9651b2ebb42da957a98a3b5160.png",
    views: 32,
  },
  {
    id: 5,
    name: "Adidas Ultraboost",
    price: "70.00",
    image:
      "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
    views: 28,
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: "70.00",
    image:
      "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
    views: 45,
  },
  {
    id: 7,
    name: "Graphic T-Shirt",
    price: "70.00",
    image:
      "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
    views: 19,
  },
  {
    id: 8,
    name: "Leather Boots",
    price: "70.00",
    image:
      "https://i.ibb.co/Wpq2YhCP/b8a8e668131d8f9651b2ebb42da957a98a3b5160.png",
    views: 37,
  },
];

export default function WBottoms() {
  // State for carousel - track starting index instead of page
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = 4;
  const maxStartIndex = Math.max(0, allProducts.length - productsToShow);

  // Get current products to display (4 consecutive products starting from startIndex)
  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + productsToShow
  );

  // Handle navigation - move one product at a time
  const goToPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bottoms
          </h1>
          <p className="text-sm lg:text-lg text-gray-600">
            From casual to statement pieces.
          </p>
        </div>

        {/* Product Grid with transition */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-300">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Navigation with active/disabled states */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={goToPrevious}
            disabled={startIndex === 0}
            className={`p-2 border border-gray-300 rounded-full transition-colors ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            aria-label="Previous product"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="text-sm text-gray-500">
            {startIndex + 1} -{" "}
            {Math.min(startIndex + productsToShow, allProducts.length)} of{" "}
            {allProducts.length}
          </div>

          <button
            onClick={goToNext}
            disabled={startIndex >= maxStartIndex}
            className={`p-2 border border-gray-300 rounded-full transition-colors ${
              startIndex >= maxStartIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
