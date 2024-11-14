import React from "react";
import DarkButton from "../DarkButton";
import MenuBar from "../MenuBar";

export const sharedButtonStyles =
  "min-w-28 h-10  rounded-lg border-borderBlue border-2 justify-center items-center flex text-base cursor-pointer";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center my-4 smCustom:px-0 px-4">
      {/* Left Items */}
      <div className="flex justify-center items-center ">
        <img src="/logo-white.svg" className="w-[137px] h-[75px]" />
      </div>

      {/* Middle Items / Menu Bar */}
      <MenuBar />

      {/* --- Right Items --- */}
      <div className="smCustom:flex justify-center items-center gap-2 hidden pr-4">
        <img src="language-button.svg" className="h-8 ml-6" />

        <DarkButton innerText="Sign In" />

        <div className={`${sharedButtonStyles}`}>Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
