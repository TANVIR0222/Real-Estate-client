import { useUserLogoutMutation } from "@/app/feature/auth/authApi";
import { logout } from "@/app/feature/auth/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useDispatch } from "react-redux";
const UserDropdownMenu = () => {
  const [position, setPosition] = useState("bottom");

  const [userLogout]  = useUserLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async() => {
    try {
     await userLogout().unwrap();
      dispatch(logout());
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            className="w-10 rounded"
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            alt=""
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ml-1 md:mr-20">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Add a Property</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Trip List</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Wish Lish</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Property List</DropdownMenuRadioItem>  
            <DropdownMenuRadioItem value="right">Reservation List</DropdownMenuRadioItem>
            <DropdownMenuRadioItem onClick ={handleLogout} value="right">Logout</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdownMenu;
