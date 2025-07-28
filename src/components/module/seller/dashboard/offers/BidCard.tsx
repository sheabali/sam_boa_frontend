"use client";

import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TBidNotification } from "@/types/bidNotification";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export const BidCard = ({
  bid,
  showChatButton = false,
}: {
  bid: TBidNotification;
  showChatButton?: boolean;
}) => {
  const router = useRouter();

  const handleCounter = (bidId: string) => {
    console.log("Counter offer for bid:", bidId);
  };

  const handleAccept = (bidId: string) => {
    console.log("Accept bid:", bidId);
  };

  const handleDecline = (bidId: string) => {
    console.log("Decline bid:", bidId);
  };

  const handleOpenChat = (bidId: string) => {
    console.log("Open chat for bid:", bidId);
    router.push(`/seller/dashboard/messages/${bidId}`);
  };

  return (
    <Card
      key={bid.id}
      className="mb-4 bg-gray-50 border-0 shadow-sm w-full max-w-3xl mx-auto"
    >
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h3 className="font-semibold text-base sm:text-lg">
                {bid.title}
              </h3>
              <span className="text-xs sm:text-sm text-gray-500">
                {bid.timestamp}
              </span>
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-gray-700">
              <p>{"You've received a bid!"}</p>
              <p>
                {bid.username} offered {bid.amount} for your product:
              </p>
              <p className="font-medium">{bid.product}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex justify-end gap-2 w-full">
              {!showChatButton && (
                <button
                  className="flex items-center bg-gray-200 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
                  onClick={() => handleDecline(bid.id)}
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Decline
                </button>
              )}
            </div>
            <div className="flex flex-wrap justify-end gap-2 w-full">
              {showChatButton ? (
                <Button
                  onClick={() => handleOpenChat(bid.id)}
                  className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 text-xs sm:text-sm w-full sm:w-auto"
                >
                  Open Chat
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => handleCounter(bid.id)}
                    className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Counter
                  </Button>
                  <Button
                    onClick={() => handleAccept(bid.id)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Accept
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
