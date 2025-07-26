"use client";

import Button from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

const followersData = [
  {
    id: 1,
    name: "Leslie Alexander",
    username: "@sophia_fashion",
    avatar: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
  },
  {
    id: 2,
    name: "Esther Howard",
    username: "@sophia_fashion",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: 3,
    name: "Annette Black",
    username: "@sophia_fashion",
    avatar: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
  },
  {
    id: 4,
    name: "Kathryn Murphy",
    username: "@sophia_fashion",
    avatar: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
  },
  {
    id: 5,
    name: "Theresa Webb",
    username: "@sophia_fashion",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: 6,
    name: "Courtney Henry",
    username: "@sophia_fashion",
    avatar: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
  },
];

const followingData = [
  {
    id: 1,
    name: "Wayne Warren",
    username: "@wayne_warren",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: 2,
    name: "Bessie Cooper",
    username: "@bessie_cooper",
    avatar: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    username: "@cameron_williamson",
    avatar: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
  },
  {
    id: 4,
    name: "Jane Alexander",
    username: "@jane_alexander",
    avatar: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    username: "@jenny_wilson",
    avatar: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
  },
  {
    id: 6,
    name: "Thomas Webb",
    username: "@thomas_webb",
    avatar: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
  },
];

export default function FollowersPage() {
  const [followingUsers, setFollowingUsers] = useState(followingData);

  const handleUnfollow = (userId: number) => {
    setFollowingUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return (
    <div className="container mx-auto bg-white min-h-screen">
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-6">
          Followers and Followings
        </h1>

        <Tabs defaultValue="followers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto">
            <TabsTrigger
              value="followers"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none pb-3 text-gray-600 data-[state=active]:text-gray-900 font-medium"
            >
              Followers
            </TabsTrigger>
            <TabsTrigger
              value="followings"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none pb-3 text-gray-600 data-[state=active]:text-gray-900 font-medium"
            >
              Followings
            </TabsTrigger>
          </TabsList>

          <div className="border-b border-gray-200 mb-4"></div>

          <TabsContent value="followers" className="mt-0">
            <div className="space-y-4">
              {followersData.map((user) => (
                <div key={user.id} className="flex items-center space-x-3 py-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {user.name}
                    </p>
                    <p className="text-gray-500 text-sm">{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="followings" className="mt-0">
            <div className="space-y-4">
              {followingUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-3 py-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {user.name}
                    </p>
                    <p className="text-gray-500 text-sm">{user.username}</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 text-xs rounded-full"
                    onClick={() => handleUnfollow(user.id)}
                  >
                    Unfollow
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
