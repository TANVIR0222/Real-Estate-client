import Search from "@/components/popularCategory/Search";
import UserDropdownMenu from "@/components/popularCategory/UserDropdownMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out max-w-screen-xl mx-auto  rounded-b-lg ${
          isScrolled ? "bg-white shadow-md" : "bg-primarybg opacity-55 text-white"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mx-2">
          <Link>
            <div className="font-bold  p-4">
              <img
                className=" w-24 md:w-36"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt="logo"
              />
            </div>
          </Link>

          {/* search */}
          <Search />

          {/* profile image  */}
          <div className="">
          <UserDropdownMenu />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
