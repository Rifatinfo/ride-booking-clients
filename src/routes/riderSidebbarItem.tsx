import AddTestimonial from "@/components/modules/testimonial/AddTestimonial";
import EditProfile from "@/pages/rider/EditProfile";
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
        title: "change-password",
        url: "change-password",
        component: ProfileManagement,
      },
      {
        title: "Profile Management",
        url: "profile-management",
        component: EditProfile,
      },
      {
        title: "Add review",
        url: "add-review",
        component: AddTestimonial,
      }
    ],
  },
]