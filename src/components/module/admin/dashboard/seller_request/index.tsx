import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function SellerRequests() {
  const sellerRequests = [
    {
      id: 1,
      name: "Darlene Robertson",
      sellerName: "@Seller name",
      shopName: "Shop name",
      avatarQuery: "man with beard smiling",
    },
    {
      id: 2,
      name: "Ronald Richards",
      sellerName: "@Seller name",
      shopName: "Shop name",
      avatarQuery: "woman with glasses",
    },
    {
      id: 3,
      name: "Floyd Miles",
      sellerName: "@Seller name",
      shopName: "Shop name",
      avatarQuery: "woman with yellow background",
    },
    {
      id: 4,
      name: "Esther Howard",
      sellerName: "@Seller name",
      shopName: "Shop name",
      avatarQuery: "woman with orange shirt",
    },
    {
      id: 5,
      name: "Jane Cooper",
      sellerName: "@Seller name",
      shopName: "Shop name",
      avatarQuery: "man with blue shirt",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
      <div className="container w-full max-w-4xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl">
          Seller Requests
        </h1>
        <div className="space-y-4">
          {sellerRequests.map((request) => (
            <div
              key={request.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                  <AvatarImage
                    src={`https://i.ibb.co/Rkp8d1qq/Rectangle-23854-1.png=${encodeURIComponent(
                      request.avatarQuery
                    )}`}
                    alt={`${request.name}'s avatar`}
                  />
                  <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-base sm:text-lg text-gray-900">
                    {request.name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {request.sellerName}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {request.shopName}
                  </span>
                </div>
              </div>
              <Link href={`/admin/dashboard/seller_request/${request.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto text-[#8B0000] hover:bg-[#8B0000] border-primary hover:text-white transition-colors duration-200 bg-transparent text-xs sm:text-sm px-4 py-2"
                >
                  View Application
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
