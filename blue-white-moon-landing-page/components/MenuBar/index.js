"use client";
import React, { useState, useEffect, useRef } from "react";
import DropDownMenuDesktop from "/components/DropDownMenuDesktop";
import DropDownMenuMobile from "/components/DropDownMenuMobile";
import { AnimatePresence, motion } from "framer-motion";
import DarkButton from "../DarkButton";
import { sharedButtonStyles } from "../Navbar";

const MenuBar = () => {
  const menuRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [overflowItems, setOverflowItems] = useState([]);
  const [displayMenuDots, setDisplayMenuDots] = useState(false);
  const [mobMenIsActive, setMobMenIsActive] = useState(false);
  const [deskMenIsActive, setDeskMenIsActive] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  const menuItems = [
    "Home",
    "Privacy Policy",
    "Terms of Use",
    "Leader Board",
    "Contact Us",
    "Community",
  ];

  // Calculate the width of the menu bar and return items
  useEffect(() => {
    function handleResize() {
      if (menuRef.current) {
        const parentWidth = menuRef.current.parentElement.offsetWidth;
        console.log("Current parent width:", parentWidth);

        let numOfItemsToReturn;
        let shouldDisplayMenuDots;

        if (parentWidth >= 1074) {
          numOfItemsToReturn = 6;
          shouldDisplayMenuDots = false;
        } else if (parentWidth <= 1074 && parentWidth >= 1023) {
          numOfItemsToReturn = 5;
          shouldDisplayMenuDots = true;
        } else if (parentWidth < 1023 && parentWidth >= 940) {
          numOfItemsToReturn = 4;
          shouldDisplayMenuDots = true;
        } else if (parentWidth < 940 && parentWidth >= 842) {
          numOfItemsToReturn = 3;
          shouldDisplayMenuDots = true;
        } else if (parentWidth < 842 && parentWidth >= 748) {
          numOfItemsToReturn = 2;
          shouldDisplayMenuDots = true;
        } else if (parentWidth < 748 && parentWidth >= 616) {
          numOfItemsToReturn = 1;
          shouldDisplayMenuDots = true;
        } else {
          numOfItemsToReturn = 0;
          shouldDisplayMenuDots = false;
        }

        // Update state for display menu dots and visible items
        setDisplayMenuDots(shouldDisplayMenuDots);
        setVisibleItems(menuItems.slice(0, numOfItemsToReturn));
        setOverflowItems(menuItems.slice(numOfItemsToReturn));

        setLoading(false); // Set loading to false once layout is calculated
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (mobMenIsActive || deskMenIsActive)
      ) {
        setMobMenIsActive(false);
        setDeskMenIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobMenIsActive, deskMenIsActive]);

  return (
    <div
      ref={menuRef}
      className="bg-themeBlue rounded-lg border-borderBlue border-2 h-12 px-6 py-4 text-sm flex justify-center items-center text-nowrap shadow-buttonShadow z-10"
    >
      {/* --- Menu Bar Items Desktop ---  */}
      <div className="flex w-full gap-4 relative justify-center items-center">
        {!loading && visibleItems.map((item) => <span key={item}>{item}</span>)}
        {displayMenuDots && !loading ? (
          <div
            onClick={() => {
              setDeskMenIsActive(!deskMenIsActive);
            }}
          >
            <img className="cursor-pointer min-w-[25px]" src="more-horiz.svg" />
            <div
              className={
                deskMenIsActive
                  ? "rounded-lg bg-[#3B82F6] border-2 border-[#014DCD] absolute right-[-88px] top-[28px] origin-top-right -z-1 flex justify-start items-start flex-col pl-4 gap-2 text-base p-4 font-light"
                  : "hidden"
              }
            >
              {overflowItems.map((item) => (
                <span className="drop-shadow-xl cursor-pointer" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* --- Menu Bar Items Mobile ---  */}
      <div
        className="smCustom:hidden flex -m-4 cursor-pointer relative"
        onClick={() => {
          setMobMenIsActive(!mobMenIsActive);
        }}
      >
        <div
          className={
            mobMenIsActive
              ? "rounded-lg h-[350px] w-[300px] bg-[#3B82F6] border-2 border-[#014DCD] absolute right-[-15px] top-[-13px] origin-top-right -z-1 flex justify-start items-start flex-col pl-4 gap-2 text-xl pt-4 font-light"
              : "hidden"
          }
        >
          {menuItems.map((item) => (
            <span className="drop-shadow-xl" key={item}>
              {item}
            </span>
          ))}

          {/* --- Right Items --- */}
          <div className="flex justify-center items-center flex-row w-full gap-6 mt-auto mb-[30px] pr-[10px]">
            <DarkButton innerText="Sign In" />
            <div className={`${sharedButtonStyles}`}>Sign Up</div>
            <img
              src="language-button.svg"
              className="h-8 ml-2 smCustom:hidden flex absolute top-[15%] right-[3%]"
            />
          </div>
        </div>
        <img
          src="/menu-burger.svg"
          alt="Menu"
          className="z-10 relative size-6"
        />
      </div>
    </div>
  );
};

export default MenuBar;
