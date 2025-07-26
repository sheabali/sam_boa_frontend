import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TBidNotification } from "@/types/bidNotification";
import { X } from "lucide-react";

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
};

export const BidCard = ({
  bid,
  showChatButton = false,
}: {
  bid: TBidNotification;
  showChatButton?: boolean;
}) => (
  <Card key={bid.id} className="mb-4 bg-gray-50 border-0 shadow-sm">
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{bid.title}</h3>
            <span className="text-sm text-gray-500">{bid.timestamp}</span>
          </div>
          <div className="space-y-1 text-sm text-gray-700">
            <p>{"You've received a bid!"}</p>
            <p>
              {bid.username} offered {bid.amount} for your product:
            </p>
            <p className="font-medium">{bid.product}</p>
          </div>
        </div>

        <div>
          <div className="flex items-end justify-end  gap-2 ml-4">
            {!showChatButton && (
              <button
                className="flex items-center bg-gray-200 px-4 rounded-full text-gray-500 hover:text-gray-700"
                onClick={() => handleDecline(bid.id)}
              >
                <X className="w-4 h-4 mr-1" />
                Click to decline offer
              </button>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            {showChatButton ? (
              <Button
                onClick={() => handleOpenChat(bid.id)}
                className="bg-red-800 hover:bg-red-900 text-white px-6"
              >
                Open Chat
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => handleCounter(bid.id)}
                  className="bg-red-800 hover:bg-red-900 text-white px-6"
                >
                  Counter
                </Button>
                <Button
                  onClick={() => handleAccept(bid.id)}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6"
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
