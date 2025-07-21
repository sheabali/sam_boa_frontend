// // components/HotelCard.tsx
// import Image from "next/image";
// import React from "react";

// interface HotelCardProps {
//   image: string;
//   title: string;
//   location?: string;
//   price: number | string;
// }

// const HotelCard: React.FC<HotelCardProps> = ({ image, title, location, price }) => {
//   return (
//     <div className="w-[370px] md:w-[340px] lg:w-[320px] rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white cursor-pointer">
//       <div className="relative w-full h-[180px]">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-medium text-gray-900">{title}</h3>
//         <p className="text-sm text-gray-500 mt-1">{location}</p>
//         <div className="mt-3">
//           <p className="text-lg font-semibold text-gray-900">${typeof price === 'number' ? price : price}</p>
//           <p className="text-xs text-gray-500">avg. nightly price</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;



// components/HotelCard.tsx
import Image from "next/image";
import React from "react";

interface HotelCardProps {
  image: string;
  title: string;
  location?: string;
  price: number | string;
}

const HotelCard: React.FC<HotelCardProps> = ({ image, title, location, price }) => {
  return (
    <div className="w-full max-w-[370px] rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white cursor-pointer hover:shadow-md transition-shadow duration-300">
      {/* Image container - fixed aspect ratio */}
      <div className="relative w-full aspect-[370/180]"> {/* Maintains 370:180 aspect ratio */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 370px"
        />
      </div>
      
      {/* Content container */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-2">{title}</h3>
        {location && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">{location}</p>
        )}
        <div className="mt-3">
          <p className="text-lg font-semibold text-gray-900">
            ${typeof price === 'number' ? price.toLocaleString() : price}
          </p>
          <p className="text-xs text-gray-500">avg. nightly price</p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;