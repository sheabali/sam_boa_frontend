/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
"use client";
import AppSidebar from "@/components/shared/sidebar/app-sidebar";
import UserAvatarDropdown from "@/components/shared/user-avatar-dropdown";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useDecodedToken } from "@/hooks/useDecodedToken";
import { useAppSelector } from "@/redux/hooks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector((state) => state.auth.token);
  const decodedToken = useDecodedToken(token);
  // const role = decodedToken?.role || "ADMIN";
  const role = "seller";

  return (
    <SidebarProvider>
      {/* Pass the user role dynamically to AppSidebar */}
      <AppSidebar role={role} />
      <SidebarInset>
        <header className="flex h-16 b  shrink-0  items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex w-full justify-between items-center gap-2 px-4">
            <div>
              <SidebarTrigger className="-ml-1 " children={undefined} />
            </div>
            <div>
              <UserAvatarDropdown />
            </div>
          </div>
        </header>
        <div className="p-4 pt-0 bg-[#F1F5F9] min-h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
