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
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-10 sm:p-6 lg:p-8">
      <div className="container  w-full  space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Seller Requests
        </h1>
        <div className="space-y-4">
          {sellerRequests.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="w-14 h-14">
                  <AvatarImage
                    src={`https://i.ibb.co/Rkp8d1qq/Rectangle-23854-1.png=${encodeURIComponent(
                      request.avatarQuery
                    )}`}
                    alt={`${request.name}'s avatar`}
                  />
                  <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg text-gray-900">
                    {request.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {request.sellerName}
                  </span>
                  <span className="text-sm text-gray-500">
                    {request.shopName}
                  </span>
                </div>
              </div>
              <Link href={`/admin/dashboard/seller_request/${request.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#8B0000] hover:bg-[#8B0000] border-primary hover:text-white transition-colors duration-200 bg-transparent"
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
