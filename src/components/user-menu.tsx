import {
  LayoutDashboard,
  LogOutIcon,
  LucideBike,
  TrainTrackIcon,
} from "lucide-react"

import {
  Avatar,
  // AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Link, useNavigate } from "react-router";
import { baseApi } from "@/redux/baseApi";
export interface DashProps {
  dashRole: UserRole
}
export type UserRole = "admin" | "rider" | "driver"
export default function UserMenu() {

  const { data, isLoading } = useUserInfoQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout({}).unwrap();
      dispatch(baseApi.util.resetApiState());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const dashboardPath = `${data?.data.role}`;
  console.log(dashboardPath);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://img.freepik.com/premium-vector/user-circle-icon_1076610-46257.jpg?w=1060" alt="Profile image" />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-64" align="end">
          <DropdownMenuLabel className="flex min-w-0 flex-col">
            <span className="text-foreground truncate text-sm font-medium">
              {data?.data?.name}
            </span>
            <span className="text-muted-foreground truncate text-xs font-normal">
              {data?.data?.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {data?.data?.role === "RIDER" &&
              <Link to="/Tracking">
                <DropdownMenuItem>
                  <TrainTrackIcon size={16} className="opacity-60" aria-hidden="true" />
                  Tracking
                </DropdownMenuItem>
              </Link>
            }
            {data?.data?.role === "RIDER" &&
              <Link to={`/ride-details`}><DropdownMenuItem>
                <LucideBike size={16} className="opacity-60" aria-hidden="true" />
                Ride Details
              </DropdownMenuItem></Link>
            }
            {data?.data?.role === "DRIVER" &&
              <Link to={`/available-online-offline`}>
                <DropdownMenuItem>
                  <LucideBike size={16} className="opacity-60" aria-hidden="true" />
                  Availability
                </DropdownMenuItem>
              </Link>
            }
            <Link to={dashboardPath}>
              <DropdownMenuItem>
                <LayoutDashboard size={16} className="opacity-60" aria-hidden="true" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>


          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button className="w-full cursor-pointer hover:bg-red-500 hover:text-white" onClick={handleLogout}>
              <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Logout</span>
            </button>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
