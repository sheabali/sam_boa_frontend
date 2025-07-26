"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  FileLock2,
  FileText,
  HandCoins,
  Home,
  InfoIcon,
  LayoutDashboard,
  MessagesSquare,
  Rss,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import Logo from "../logo/Logo";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  user: {
    navMain: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Order History",
        url: "/user/dashboard/order/order_history",
        icon: FileText,
      },
      {
        title: "Wishlist",
        url: "/user/dashboard/wishlist",
        icon: ShoppingCart,
      },
      {
        title: "Messages",
        url: "/user/dashboard/messages",
        icon: ShoppingCart,
      },
      {
        title: "Change Password",
        url: "/user/dashboard/change_password",
        icon: FileLock2,
      },
      {
        title: "Profile Settings",
        url: "/user/dashboard/profile_settings",
        icon: User,
      },
      {
        title: "Go Back To Home",
        url: "/",
        icon: Home,
      },
    ],
  },
  seller: {
    navMain: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "My Products",
        url: "/seller/dashboard/my_products",
        icon: FileText,
      },
      {
        title: "Offers",
        url: "/seller/dashboard/offers",
        icon: HandCoins,
      },
      {
        title: "Messages",
        url: "/seller/dashboard/messages",
        icon: MessagesSquare,
      },
      {
        title: "Product Status",
        url: "/seller/dashboard/product_status",
        icon: MessagesSquare,
      },

      {
        title: "Followers and Followings",
        url: "/seller/dashboard/followers_and_followings",
        icon: Rss,
      },
      {
        title: "Change Password",
        url: "/user/dashboard/change_password",
        icon: FileLock2,
      },
      {
        title: "Profile Settings",
        url: "/user/dashboard/profile_settings",
        icon: User,
      },
      {
        title: "Go Back To Home",
        url: "/",
        icon: Home,
      },
    ],
  },
  admin: {
    navMain: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        title: "Users",
        url: "/user/dashboard/users",
        icon: HandCoins,
        items: [
          {
            title: "Users",
            url: "/user/dashboard/estimates",
            icon: Users,
          },
          {
            title: "Pending Users",
            url: "/user/dashboard/pending-users",
            icon: InfoIcon,
          },
        ],
      },
      {
        title: "Your Profile",
        url: "/user/dashboard/profile",
        icon: User,
      },
      {
        title: "Go Back To Home",
        url: "/",
        icon: Home,
      },
    ],
  },
};

// add roles based on your requirements
interface AppSidebarProps {
  role: string;
}

export default function AppSidebar({ role, ...props }: AppSidebarProps) {
  const sidebarData = data[role?.toLowerCase() as keyof typeof data];

  return (
    <Sidebar
      collapsible="icon"
      className="w-64 bg-white border-r border-blue-200"
      {...props}
    >
      <SidebarHeader>
        <Link
          href={"/"}
          className="flex items-center w-full max-h-40 justify-center"
        >
          <Logo />
        </Link>
        <div className="mt-7 mb-[30px]">
          <h2 className="text-[#424655] text-2xl lg:text-3xl text-center font-semibold">
            Dashboard
          </h2>
          <p className="text-[#424655] text-2xl lg:text-base text-center font-semibold">
            Hi, Sam. Welcome back!
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData?.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
