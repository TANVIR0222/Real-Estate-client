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
import { Link } from "react-router-dom";
const UserDropdownMenu = ({user}) => {
  const [position, setPosition] = useState("");

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
            className="w-14 h-14 rounded-full"
            src={user?.profileImage}
            alt=""
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ml-1 md:mr-20">
          <DropdownMenuLabel>{user?.firstname} {user?.lastname}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link to={'/create-List'}><DropdownMenuRadioItem value="top">Add a Property</DropdownMenuRadioItem></Link> 
          <Link to={'/create-List'}> <DropdownMenuRadioItem value="bottom">Trip List</DropdownMenuRadioItem></Link> 
          <Link to={'/create-List'}> <DropdownMenuRadioItem value="wish">Wish Lish</DropdownMenuRadioItem></Link> 
          <Link to={'/create-List'}> <DropdownMenuRadioItem value="property">Property List</DropdownMenuRadioItem></Link> 
            <DropdownMenuRadioItem onClick ={handleLogout} value="right">Logout</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdownMenu;
