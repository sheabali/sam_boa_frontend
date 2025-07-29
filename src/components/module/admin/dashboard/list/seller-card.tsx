import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface SellerCardProps {
  name: string;
  username: string;
  shopName: string;
  isActive: boolean;
  avatarUrl: string;
  avatarFallback: string;
}

export function SellerCard({
  name,
  username,
  shopName,
  isActive,
  avatarUrl,
  avatarFallback,
}: SellerCardProps) {
  return (
    <Card className="p-4 md:p-10 rounded-lg shadow-sm   bg-white">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 md:h-12 md:w-12">
            <AvatarImage
              src={avatarUrl || "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png"}
              alt={`${name}'s avatar`}
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <div className="font-semibold text-sm md:text-lg">{name}</div>
            <div className="text-[10px] md:text-sm text-gray-500">
              @{username}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500">
              {shopName}
            </div>
          </div>
        </div>
        <div
          className={`px-3 md:py-1  rounded-full text-sm font-medium ${
            isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </div>
      </div>
    </Card>
  );
}
