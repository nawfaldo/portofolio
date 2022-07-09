import React from "react";
import Link from "next/link";
import { useScrollPosition } from "../utils/useScrollPostion";

const NavList = ({ text, scrollPosition }: any) => {
  return (
    <li
      className={
        scrollPosition == 0
          ? "font-medium text-lg cursor-pointer text-white hover:text-black font-Poppins"
          : "font-light text-lg cursor-pointer text-gray-600 hover:text-black font-Poppins"
      }
    >
      {text}
    </li>
  );
};

const Header = () => {
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={
        scrollPosition == 0
          ? "sticky top-0 w-full bg-[#A0D995] px-[110px] py-4 grid grid-cols-3 items-center z-10"
          : "sticky top-0 border-b border-gray-300 w-full bg-white px-[110px] py-4 grid grid-cols-3 items-center z-10"
      }
    >
      <Link href="/">
        <h1
          className={
            scrollPosition == 0
              ? "cursor-pointer font-bold text-2xl text-white w-min font-Oswald"
              : "cursor-pointer font-bold text-2xl w-min font-Oswald"
          }
        >
          NAWFALDO
        </h1>
      </Link>

      <nav className="w-max mx-auto">
        <ul className="flex space-x-10">
          <NavList text="About" scrollPosition={scrollPosition} />
          <NavList text="Project" scrollPosition={scrollPosition} />
          <NavList text="Contact" scrollPosition={scrollPosition} />
        </ul>
      </nav>

      <div className="flex justify-end">
        <button
          className={
            scrollPosition == 0
              ? "shadow-sm bg-[#6CC4A1] w-max px-5 py-3 rounded-xl border-b-4 border-[#4CACBC] text-white font-Poppins"
              : "shadow-sm bg-[#A0D995] w-max px-5 py-3 rounded-xl border-b-4 border-[#6CC4A1] text-white font-Poppins"
          }
        >
          <p className="font-medium">Download CV</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
