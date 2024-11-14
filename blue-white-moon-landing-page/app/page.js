"use client";
import Image from "next/image";
import BackgroundSemiCircleWithAnimations from "@/components/BackgroundSemiCircleWithAnimations";
import DarkButton from "@/components/DarkButton";

export default function Home() {
  return (
    <main className="app flex w-full   flex-col items-center relative justify-end overflow-hidden sm:pt-20 pt-0 sm:pb-0 pb-10 h-fit">
      <BackgroundSemiCircleWithAnimations />
      <div className="flex flex-col justify-center items-center mb-auto overflow-hidden ">
        <img
          src="dollar-lonely.png"
          className="custom-shadow relative h-[400px] w-[400px] top-[112px]"
        />
        <h1 className="sm:text-5xl text-3xl lg:max-w-[50vw] max-w-[80vw] text-center font-semibold sm:leading-[51px] leading-[30px] tracking-normal text-stroke text-stroke drop-shadow-lg">
          Bring Interested Clients & Get Paid As Never Before!
        </h1>
        <p className="font-light lg:max-w-[40vw] sm:max-w-[60vw] text-center  leading-[20px] italic mt-[20px]">
          <span className="font-bold">Number #1 Affiliate</span> Platform that
          provides you marketing assets Higher payout, dedicated support and
          mentoring, All in one!
        </p>

        {/* --- Buttons Container --- */}
        <div className="flex gap-10 pt-[20px] text-base mb-20 z-50">
          <DarkButton
            innerText="Start Earning Today"
            additionalSytles="px-6 py-[20px] cursor-pointer"
          />
          <div className="flex justify-center items-center gap-2 box-shadow-xl cursor-pointer z-50">
            <img src="play-button.svg" className="w-[30px]" />
            <span>How to start</span>
          </div>
        </div>
      </div>
    </main>
  );
}
