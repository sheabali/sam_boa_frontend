"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { BidCard } from "./BidCard";

interface BidNotification {
  id: string;
  title: string;
  username: string;
  amount: string;
  product: string;
  timestamp: string;
  type: "pending" | "accepted";
}

const mockBids: BidNotification[] = [
  {
    id: "1",
    title: "New Bid Received!",
    username: "@ZahidStreetwear",
    amount: "C$50",
    product: "Vintage Oversized Hoodie",
    timestamp: "2minutes ago",
    type: "pending",
  },
  {
    id: "2",
    title: "New Bid Received!",
    username: "@ZahidStreetwear",
    amount: "C$50",
    product: "Vintage Oversized Hoodie",
    timestamp: "2minutes ago",
    type: "pending",
  },
  {
    id: "3",
    title: "New Bid Received!",
    username: "@ZahidStreetwear",
    amount: "C$50",
    product: "Vintage Oversized Hoodie",
    timestamp: "2minutes ago",
    type: "pending",
  },
  {
    id: "4",
    title: "New Bid Received!",
    username: "@ZahidStreetwear",
    amount: "C$50",
    product: "Vintage Oversized Hoodie",
    timestamp: "2minutes ago",
    type: "pending",
  },
  {
    id: "5",
    title: "New Bid Received!",
    username: "@ZahidStreetwear",
    amount: "C$50",
    product: "Vintage Oversized Hoodie",
    timestamp: "2minutes ago",
    type: "accepted",
  },
  {
    id: "6",
    title: "New Bid Received!",
    username: "@ZahidStreetwear",
    amount: "C$50",
    product: "Vintage Oversized Hoodie",
    timestamp: "2minutes ago",
    type: "accepted",
  },
];

export default function Offers() {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingBids = mockBids.filter((bid) => bid.type === "pending");
  const acceptedBids = mockBids.filter((bid) => bid.type === "accepted");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My products</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto">
          <TabsTrigger
            value="pending"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none rounded-none border-b-2 border-transparent pb-2 font-medium"
          >
            Pending Offers
          </TabsTrigger>
          <TabsTrigger
            value="accepted"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none rounded-none border-b-2 border-transparent pb-2 font-medium"
          >
            Accepted Offers
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="pending" className="mt-0">
            <div className="space-y-4">
              {pendingBids.map((bid) => (
                <BidCard key={bid.id} bid={bid} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accepted" className="mt-0">
            <div className="space-y-4">
              {acceptedBids.map((bid) => (
                <BidCard key={bid.id} bid={bid} showChatButton={true} />
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
