import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";
const Navbar = ({ location, fetchLocation }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleDetectLocation = async () => {
    await fetchLocation();
    setOpenDropdown(false);
  };

  return (
    <div className="bg-white py-5 shadow-2xl sticky top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl hover:scale-95 transition-all">
              <span className="text-red-500 font-serif">Electro</span>
              nica
            </h1>
          </Link>
          <div
            className="flex gap-2 cursor-pointer text-gray-700 items-center relative"
            onClick={toggleDropdown}
          >
            <MapPin className="text-red-500"></MapPin>
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-1">
                  <p>{location?.address?.county}</p>
                  <p>{location?.address?.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown />
          </div>
          {openDropdown ? (
            <div className="w-62.5 h-max shadow-2xl z-50 bg-white top-14 left-90 border-2 p-5 border-gray-100 rounded-md absolute">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">
                Change location{" "}
                <span>
                  <CgCloseO
                    onClick={toggleDropdown}
                    className="cursor-pointer"
                  />
                </span>
              </h1>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-600 hover:scale-102 transition-all"
                onClick={handleDetectLocation}
              >
                Detect my location
              </button>
            </div>
          ) : null}
        </div>
        <div>
          {/* Menu section */}
          <nav className="flex items-center gap-5">
            <ul className="flex gap-7 items-center text-xl font-semibold">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-3  border-red-500" : "text-black"}`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-3  border-red-500" : "text-black"}`
                }
              >
                <li>Products</li>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-3 border-red-500" : "text-black"}`
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-3 border-red-500" : "text-black"}`
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>
            <Link to={"/cart"} className="relative">
              {" "}
              <IoCartOutline className="h-7 w-7" />
              <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
                {" "}
                0
              </span>
            </Link>
            <div className="ml-10">
              <SignedOut>
                <SignInButton>
                  <button className="bg-red-500 font-semibold cursor-pointer px-3 py-1 rounded-md text-white hover:bg-red-600 hover:scale-102 transition-all">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
