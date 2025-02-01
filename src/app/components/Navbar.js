"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import logo from "/public/image/logo2.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAnglesRight } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { useTranslations } from "use-intl";
import { useParams, useRouter } from "next/navigation";

// Define menu items with name and link

const Navbar = ({ subNav }) => {
  const t = useTranslations("navbar");
  const menuItems = [
    { name: t("home"), link: "/" },
    { name: t("packages"), link: "/packages" },
    { name: t("service"), link: "/service" },
    { name: t("store"), link: "#" },
    { name: t("contact_us"), link: "#" },
  ];

  const [theme, setTheme] = useState(null);
  const [getLang, setGetLang] = useState(null);
  const router = useRouter();
  const param = useParams();

  useEffect(() => {
    setGetLang(param.locale);
  }, [param]);

  function HandelLang(e) {
    const swathedLang = e.target.checked ? "ar" : "en";
    setGetLang(e.target.checked ? "ar" : "en");
    router.replace(`${swathedLang}`);
  }


  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if(!localStorage.getItem('color-theme')){
      if (isDarkMode) {
        setTheme("dark");
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // When the component mounts, retrieve the stored theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("light"); // Default theme
      document.documentElement.classList.add("light");
    }
  }, []);

  // Apply the selected theme to localStorage and the document when it changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem("color-theme", theme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);



  return (
    <nav className="absolute w-full z-50">
      <div
        className={`${
          subNav ? "absolute w-full z-50" : "bg-secondary dark:bg-black"
        }`}
      >
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
                <li key={index}>
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

            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
              <LuSun className="swap-on text-yellow-400" size={25} />
              <FaRegMoon size={25} className="swap-off" />
            </label>

            {/* lang switch */}

            <label className="swap">
              <input type="checkbox" onChange={(e) => HandelLang(e)} />
              <div className="swap-off">EN</div>
              <div className="swap-on">AR</div>
            </label>

            {/* Shopping bag */}
            <button className="relative mr-1">
              <HiOutlineShoppingBag size={25} />
              <span className="absolute top-[-15px] right-[-10px] bg-[#145954] dark:bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Start button */}
           

            {/* Drawer for mobile view */}
            <div className="drawer drawer-end block md:hidden">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <HiMenuAlt1 size={25} />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-secondary dark:bg-black text-white min-h-full w-80 p-4">
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
        <hr className="border-white dark:border-black" />
      </div>
    </nav>
  );
};

export default Navbar;
