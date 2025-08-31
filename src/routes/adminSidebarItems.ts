import Analytics from "@/pages/admin/Analytics";
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
      },
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
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
    ],
  },

];