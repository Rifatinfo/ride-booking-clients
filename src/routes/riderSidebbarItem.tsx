import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";

export const riderSidebarItem : ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
          {
            title: "Rider",
            url: "/rider",
            component: Analytics,
          },
        ],
    },
]