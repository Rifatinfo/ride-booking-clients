import { role } from "@/constants/role";
import { adminSidebarItem } from "@/routes/adminSidebarItems";
import { driverSidebarItem } from "@/routes/driverSidebarItem";
import { riderSidebarItem } from "@/routes/riderSidebbarItem";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole : TRole) => {
    switch(userRole){
       case role.superAdmin : 
          return [...adminSidebarItem];
       case role.admin : 
          return [...adminSidebarItem];
       case role.rider : 
          return [...riderSidebarItem];
       case role.driver : 
          return [...driverSidebarItem];
        default : 
          return [];
    }
}