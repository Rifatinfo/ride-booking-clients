import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";

export const  driverSidebarItem : ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
          {
            title: "Driver",
            url: "/driver",
            component: Analytics,
          },
        ],
    },
]