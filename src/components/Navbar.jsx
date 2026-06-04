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
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({ location, fetchLocation }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleDetectLocation = async () => {
    await fetchLocation();
    setOpenDropdown(false);
    toast.success("Successfully detected your Location");
  };
  const { cartItem } = useSelector((state) => state.cart);

  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="bg-white py-5 shadow-2xl sticky top-0 left-0 w-full z-50 px-4 md:px-4 lg:px-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-2 md:gap-0 lg:gap-0">
        {/* Logo section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl hover:scale-95 transition-all">
              <span className="text-red-500 font-serif">Electro</span>
              nica
            </h1>
          </Link>
          <div
            className="md:flex gap-2 cursor-pointer text-gray-700 items-center relative hidden"
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
            <div className="w-62.5 h-max shadow-2xl z-50 bg-white top-14 left-40 lg:left-55 lg:top-18 border-2 p-5 border-gray-100 rounded-md absolute">
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
            <ul className="md:flex gap-7 items-center text-xl font-semibold hidden">
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
            <Link to={"/cart"} className="relative md:block">
              {" "}
              <IoCartOutline className="h-7 w-7" />
              <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
                {" "}
                {cartItem.length}
              </span>
            </Link>
            <div className="ml-10 hidden md:block">
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
            {openNav ? (
              <HiMenuAlt3
                className="h-7 w-7 md:hidden"
                onClick={() => setOpenNav(false)}
              />
            ) : (
              <HiMenuAlt1
                className="h-7 w-7 md:hidden"
                onClick={() => setOpenNav(true)}
              />
            )}
          </nav>
        </div>
      </div>

      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
