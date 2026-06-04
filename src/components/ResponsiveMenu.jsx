import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { CgCloseO } from "react-icons/cg";
import useLocation from "../hooks/useLocation";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();
  const { location, fetchLocation } = useLocation();
  return (
    <div
      className={`${openNav ? "left-0" : "-left-full"} fixed bottom-0 top-0 z-20 flex h-screen w-[70%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div className="flex items-center justify-start gap-4">
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
          <div>
            <h1>Hello, {user?.firstName}</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-2xl font-semibold">
            <Link
              to={"/"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/products"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Products</li>
            </Link>
            <Link
              to={"/about"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>About</li>
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Contact</li>
            </Link>
            <div>
              <SignedOut>
                <SignInButton>
                  <button className="bg-red-500 font-semibold cursor-pointer px-3 py-1 rounded-md text-white hover:bg-red-600 hover:scale-102 transition-all">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
            <div className="flex gap-2 cursor-pointer text-gray-700 items-center text-xl">
              <MapPin className="text-red-500"></MapPin>
              <span className="font-semibold">
                {location ? (
                  <div className="-space-y-1 flex gap-1">
                    <p>{location?.address?.county}</p>,
                    <p>{location?.address?.state}</p>
                  </div>
                ) : (
                  "Add Address"
                )}
              </span>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
