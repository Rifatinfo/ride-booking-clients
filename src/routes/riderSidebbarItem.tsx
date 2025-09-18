import AddTestimonial from "@/components/modules/testimonial/AddTestimonial";
import ProfileManagement from "@/pages/rider/ProfileManagement";
import RiderHistory from "@/pages/rider/RiderHistory";
import type { ISidebarItem } from "@/types";
export const riderSidebarItem: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Rider History",
        url: "all-history",
        component: RiderHistory,
      },
      {
        title: "Change Password",
        url: "change-password",
        component: ProfileManagement,
      },
      {
        title: "Add review",
        url: "add-review",
        component: AddTestimonial,
      }
    ],
  },
]