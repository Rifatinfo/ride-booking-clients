import AllUsers from "@/pages/admin/AllUsers";
import Analytics from "@/pages/admin/Analytics";
import ProfileManagement from "@/pages/admin/ProfileManagement";
import ValidDriverCheck from "@/pages/admin/ValidDriverCheck";
import type { ISidebarItem } from "@/types";

export const adminSidebarItem : ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      }
    ],
  },
  {
    title: "Driver Action",
    items: [
      {
        title: "Access Driver",
        url: "/admin/access-driver",
        component: ValidDriverCheck,
      },
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
    ],
  },
  {
    title: "Profile Management",
    items: [
      {
        title: "Edit Password",
        url: "/admin/change-password",
        component: ProfileManagement,
      },
    ],
  },

];