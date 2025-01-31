"use client";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import logo from "/public/image/logo2.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAnglesRight } from "react-icons/fa6";

import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  // Define menu items with name and link
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Store", link: "/store" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
   <nav>
        <div className='absolute w-full z-50'>
        <div className="navbar text-white py-5 md:px-8 px-2">
      {/* Navbar content with logo and menu for larger screens */}
      <div className="navbar-start flex items-center gap-8 w-full">
        {/* Logo link */}
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>

        {/* Menu items for larger screens */}
        <ul className="hidden lg:flex text-[16px] flex-grow justify-start gap-6">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setActive(item.name)}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar items like icons and buttons */}
      <div className="navbar-end gap-4">
        <div className="gap-2 items-center hidden xl:flex">
          {/* Phone icon */}
          <FiPhoneCall size={25} />
          <span className="text-[14px]">+(20) 123 456 789</span>
        </div>
        {/* Search icon */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* sun icon */}

          <LuSun className="swap-on" size={25} />
          {/* moon icon */}
          <FaRegMoon size={25} className="swap-off" />
        </label>
        <button className="relative mr-1">
          {/* Shopping bag icon */}
          <HiOutlineShoppingBag size={25} />
          <span className="absolute top-[-15px] right-[-10px] bg-[#145954] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </button>

        {/* Start button */}
        <button className="md:flex hidden items-center gap-2 px-6 py-2 bg-[#145954] rounded-[100px] shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1a7f67] hover:shadow-lg hover:text-white">
          <FaAnglesRight size={18} />
          Start
        </button>

        {/* Drawer for mobile view */}
        <div className="drawer drawer-end block md:hidden">
          {/* Input checkbox to toggle the drawer */}
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Label for drawer button */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <HiMenuAlt1 size={25} />
            </label>
          </div>
          <div className="drawer-side">
            {/* Label to close the drawer */}
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* Drawer menu items for mobile */}
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Mapping over the menu items for mobile drawer */}
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    </div>
   </nav>
  );
};

export default Navbar;
