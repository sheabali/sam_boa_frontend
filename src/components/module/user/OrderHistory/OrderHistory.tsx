"use client";

import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function OrderHistoryPage() {
  const orders = [
    {
      id: "1",
      productName: "Product Name 1",
      sellerName: "Seller Name A",
      orderDate: "12/05/25",
      status: "in_transit",
      action: "Track Order",
    },
    {
      id: "2",
      productName: "Product Name 2",
      sellerName: "Seller Name B",
      orderDate: "12/05/25",
      status: "recieved",
      action: "Give a Review",
    },
    {
      id: "3",
      productName: "Product Name 3",
      sellerName: "Seller Name C",
      orderDate: "12/05/25",
      status: "cancelled",
      action: "View Details",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "in_transit":
        return "bg-[#EEFAEF] text-[#00BE10]";
      case "recieved":
        return "bg-[#FEF8E7] text-[#D09900]";
      case "cancelled":
        return "bg-[#FFE9E9] text-[#DD0000]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatStatusText = (status: string) => {
    return status
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const getActionLink = (action: string, orderId: string) => {
    switch (action) {
      case "Track Order":
        return `/user/dashboard/order/track_order/${orderId}`;
      case "Give a Review":
        return `/user/dashboard/order/give-review/${orderId}`;
      case "View Details":
        return `/order/${orderId}/details`;
      default:
        return "#";
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 md:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Order History
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
        Recent Orders
      </p>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="bg-[#F4F4F4] w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-6 lg:p-9 gap-4 sm:gap-0">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                    {order.productName}
                  </p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {formatStatusText(order.status)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  {order.sellerName}
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  Order date: {order.orderDate}
                </p>
              </div>
              <div className="self-start sm:self-center">
                <Link href={getActionLink(order.action, order.id)}>
                  <Button className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base px-4 py-2 w-full sm:w-auto">
                    {order.action}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
