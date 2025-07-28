/* eslint-disable react/no-children-prop */
"use client";

import AppSidebar from "@/components/shared/sidebar/app-sidebar";
import UserAvatarDropdown from "@/components/shared/user-avatar-dropdown";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <SidebarProvider>
      {/* Render only if role is set to avoid flash or error */}
      {role && <AppSidebar role={role} />}
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex w-full justify-between items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" children={undefined} />
            <UserAvatarDropdown onRoleChange={setRole} />
          </div>
        </header>
        <div className="p-4 pt-0 bg-[#F1F5F9] min-h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
