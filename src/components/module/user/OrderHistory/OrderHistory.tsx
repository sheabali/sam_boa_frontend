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
    <div className="container px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      <p className="text-lg text-gray-600 mb-6">Recent Orders</p>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="bg-[#F4F4F4]">
            <div className="flex justify-between items-center py-5 px-9">
              <div>
                <p className="text-2xl font-semibold">
                  {order.productName}
                  <span
                    className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {formatStatusText(order.status)}
                  </span>
                </p>
                <p className="text-gray-600 text-[18px]">{order.sellerName}</p>
                <p className="text-gray-600 text-[18px] mt-2">
                  Order date: {order.orderDate}
                </p>
              </div>
              <div>
                <Link href={getActionLink(order.action, order.id)}>
                  <Button className="bg-primary text-white hover:bg-primary/90">
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
