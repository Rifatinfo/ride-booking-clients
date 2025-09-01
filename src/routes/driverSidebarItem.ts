import DriverAcceptRequest from "@/pages/driver/DriverAcceptRequest";
import type { ISidebarItem } from "@/types";

export const  driverSidebarItem : ISidebarItem[] = [
    {
        title: "Rider Related",
        items: [
          {
            title: "Rider Request",
            url: "/driver/driver-accept-request",
            component: DriverAcceptRequest,
          },
        ],
    },
]