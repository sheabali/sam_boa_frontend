import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Annette Black",
      username: "@sophia_fashion",
      reviewText:
        "Item arrived exactly as described. Seller was super responsive and even shared fit photos before confirming. Smooth transaction!",
      rating: 4,
      date: "18 May, 2025",
      productImage:
        "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
      avatar: "https://i.ibb.co/8hL2q29/Rectangle-2.png",
    },
    {
      id: 2,
      name: "Albert Flores",
      username: "@sophia_fashion",
      reviewText:
        "Item arrived exactly as described. Seller was super responsive and even shared fit photos before confirming. Smooth transaction!",
      rating: 4,
      date: "18 May, 2025",
      productImage:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
      avatar: "https://i.ibb.co/8hL2q29/Rectangle-2.png",
    },
    {
      id: 3,
      name: "Jacob Jones",
      username: "@sophia_fashion",
      reviewText:
        "Item arrived exactly as described. Seller was super responsive and even shared fit photos before confirming. Smooth transaction!",
      rating: 4,
      date: "18 May, 2025",
      productImage:
        "https://i.ibb.co/hF12zRC7/8f04b0df5efab58d2bef3a0d1974b6f28a80df84.png",
      avatar: "https://i.ibb.co/8hL2q29/Rectangle-2.png",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50  sm:p-6 ">
      <div className="w-full container bg-white rounded-lg shadow-sm  sm:p-8 ">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
            Reviews
          </h2>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="py-9 px-4">
                <div className="flex items-center my-5 gap-3">
                  <Image
                    src={review.avatar || "/placeholder.svg"}
                    alt={`${review.name}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[24px] text-gray-900">
                      {review.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {review.username}
                    </span>
                  </div>
                </div>
                <div className="flex-grow mt-4 sm:mt-0 sm:ml-4">
                  <p className="text-gray-700 text-[20px] leading-relaxed">
                    {review.reviewText}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                <span className="text-[24px]  mb-2">{review.date}</span>
                <Image
                  src={review.productImage || "/placeholder.svg"}
                  alt="Product image"
                  width={100}
                  height={100}
                  className="rounded-md object-cover aspect-square"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
