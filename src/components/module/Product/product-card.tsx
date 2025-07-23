/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <Card
      key={product.id}
      className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
    >
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative bg-gray-900 aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
            <button className="p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors">
              <Heart className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded-full">
              <Eye className="w-3 h-3 text-white" />
              <span className="text-xs text-white">{product.views ?? 0}</span>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-4 bg-white">
          <h3 className="font-medium text-gray-900 mb-2 text-sm truncate">
            {product.name}
          </h3>
          <p className="text-lg font-semibold text-gray-900 mb-3">
            ${product.price}
          </p>
          <Button
            variant="outline"
            className="w-full text-sm border-red-600 not-visited: hover:bg-gray-50 bg-transparent"
            onClick={() => router.push(`/products/${product.id}`)}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// // components/ProductGrid.tsx
// ("use client");

// import { useRouter } from "next/navigation";

// interface Product {
//   id: string | number;
//   name: string;
//   image: string;
//   price: string | number;
//   views?: number;
// }

// interface ProductGridProps {
//   products: Product[];
// }

// export default function ProductGrid({ products }: ProductGridProps) {
//   const router = useRouter();

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-300">
//       {products.map((product) => (
//         <Card
//           key={product.id}
//           className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
//         >
//           <CardContent className="p-0">
//             {/* Image Section */}
//             <div className="relative bg-gray-900 aspect-square overflow-hidden">
//               <Image
//                 src={product.image || "/placeholder.svg"}
//                 alt={product.name}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               {/* Overlay */}
//               <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
//                 <button className="p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors">
//                   <Heart className="w-4 h-4 text-white" />
//                 </button>
//                 <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded-full">
//                   <Eye className="w-3 h-3 text-white" />
//                   <span className="text-xs text-white">
//                     {product.views ?? 0}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Info Section */}
//             <div className="p-4 bg-white">
//               <h3 className="font-medium text-gray-900 mb-2 text-sm truncate">
//                 {product.name}
//               </h3>
//               <p className="text-lg font-semibold text-gray-900 mb-3">
//                 ${product.price}
//               </p>
//               <Button
//                 variant="outline"
//                 className="w-full text-sm hover:bg-gray-50 bg-transparent"
//                 onClick={() => router.push(`/products/${product.id}`)}
//               >
//                 View Details
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }
