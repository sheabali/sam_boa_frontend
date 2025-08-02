"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserAvatarDropdown({
  onRoleChange,
}: {
  onRoleChange?: (role: string) => void;
}) {
  const router = useRouter();

  const handleSelect = (value: string) => {
    localStorage.setItem("role", value);
    onRoleChange?.(value); // notify parent (DashboardLayout)

    let path = "/";
    switch (value) {
      case "user":
        path = "/user/dashboard/order/order_history";
        break;
      case "seller":
        path = "/seller/dashboard/my_products";
        break;
      case "admin":
        path = "/admin/dashboard";
        break;
    }

    router.push(path);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://i.ibb.co/mVjzdhHW/Rectangle-23852.png"
              alt="User avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Open user menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSelect("user")}>
          User
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("seller")}>
          Seller
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("admin")}>
          Admin
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
