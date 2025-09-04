import DriverAcceptRequest from "@/pages/driver/DriverAcceptRequest";
import DriverEarning from "@/pages/driver/DriverEarning";
import ProfileManagement from "@/pages/rider/ProfileManagement";
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
    {
        title: "Driver Earning",
        items: [
          {
            title: "Earning & Ride History",
            url: "/driver/earning",
            component: DriverEarning,
          },
          {
            title: "Profile Management",
            url: "/driver/profile",
            component: ProfileManagement,
          },
        ],
    },
]