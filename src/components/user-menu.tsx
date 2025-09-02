import {
  LayoutDashboard,
  LogOutIcon,
  TrainTrackIcon,
  UserCog,
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

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1756051695~exp=1756055295~hmac=68bc8506673a7be1c6a402c83987f593d4ee7e515370e106063c97a9c7eca9b4&w=1480" alt="Profile image" />
              {/* <AvatarFallback>KK</AvatarFallback> */}
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
              <DropdownMenuItem>
                <TrainTrackIcon size={16} className="opacity-60" aria-hidden="true" />
                <Link to="/Tracking">Tracking</Link>
              </DropdownMenuItem>
            }
            <DropdownMenuItem>
              <LayoutDashboard size={16} className="opacity-60" aria-hidden="true" />
              <Link to="/"><span>Dashboard</span></Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <UserCog size={16} className="opacity-60" aria-hidden="true" />
              <Link to="/"><span>Edit Profile</span></Link>
            </DropdownMenuItem>
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
