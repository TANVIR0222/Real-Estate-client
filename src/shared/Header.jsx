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
    <div>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out max-w-screen-xl mx-auto ${
          isScrolled
            ? "bg-gray-100 shadow-md"
            : "bg-gray-50 opacity-55 text-white"
        }`}
      >
        <Link>
          <div className="font-bold  p-4">
            <h1>My-Home</h1>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
