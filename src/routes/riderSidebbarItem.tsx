import Analytics from "@/pages/admin/Analytics";
import ProfileManagement from "@/pages/rider/ProfileManagement";
import RiderHistory from "@/pages/rider/RiderHistory";
import type { ISidebarItem } from "@/types";
export const riderSidebarItem: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Rider",
        url: "/rider",
        component: Analytics,
      },
      {
        title: "Rider History",
        url: "all-history",
        component: RiderHistory,
      },
      {
        title: "Change Password",
        url: "change-password",
        component: ProfileManagement,
      }
    ],
  },
]