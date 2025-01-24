import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showExtraNavbar, setShowExtraNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down
        setShowExtraNavbar(false);
      } else {
        // User is scrolling up
        setShowExtraNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full z-10 bg-white">
      {/* Extra Navbar */}
      {showExtraNavbar && (
        <div
          className={`transform ${
            showExtraNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } transition-transform duration-300 ease-in-out bg-gray-100 border-b border-gray-300 py-2 px-4 sm:px-10 md:px-14 lg:px-39 flex justify-end`}
        >
          <Link
            href="#about"
            className="text-gray-700 text-sm sm:text-base font-semibold hover:text-blue-600 transition ml-4"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 text-sm sm:text-base font-semibold hover:text-blue-600 transition ml-4"
          >
            Contact Us
          </Link>
          <Link
            href="#blog"
            className="text-gray-700 text-sm sm:text-base font-semibold hover:text-blue-600 transition ml-4"
          >
            Blog
          </Link>
        </div>
      )}
      <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500/40 py-4">
        <img src={assets.logo} alt="" className="w-28 lg:w-32 cursor-pointer" />
        <div className="hidden md:flex items-center gap-5 text-gray-500">
          <div className="flex items-center gap-5">
            <button>Become Educator </button> |<Link> My Enrollments</Link>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Create Account
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 ">
          <div>
            <button>Become Educator </button> |<Link> My Enrollments</Link>
          </div>
          <button>
            <img src={assets.user_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
