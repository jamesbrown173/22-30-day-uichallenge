"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import BackgroundSemiCircleWithAnimations from "@/components/BackgroundSemiCircleWithAnimations";
import DarkButton from "@/components/DarkButton";

export default function Home() {
  useEffect(() => {
    gsap.from([".dollar-image", ".heading", ".subtext", ".buttons-container"], {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="app flex w-full flex-col items-center relative justify-center overflow-hidden pt-10 sm:pb-0 pb-0 h-fit">
      <BackgroundSemiCircleWithAnimations />
      <div className="flex flex-col justify-center items-center mb-auto overflow-hidden">
        <img
          src="dollar-lonely.webp"
          alt="Dollar illustration"
          className="dollar-image custom-shadow relative h-[400px] w-[400px] top-[112px]"
        />
        <h1 className="heading sm:text-5xl text-3xl max-w-[600px] w-[80vw] text-center font-semibold sm:leading-[51px] leading-[30px] tracking-normal text-stroke text-stroke drop-shadow-lg">
          Bring Interested Clients & Get Paid As Never Before!
        </h1>
        <p className="subtext font-light max-w-[600px] w-[80vw] text-center leading-[20px] italic mt-[25px]">
          <span className="font-bold">Number #1 Affiliate</span> Platform that
          provides you marketing assets Higher payout, dedicated support and
          mentoring, All in one!
        </p>

        {/* --- Buttons Container --- */}
        <div className="buttons-container flex gap-10 pt-[20px] text-base mb-20 mt-1 z-50">
          <DarkButton
            innerText="Start Earning Today"
            additionalSytles="px-6 py-[20px] cursor-pointer"
          />
          <div className="flex justify-center items-center gap-2 box-shadow-xl cursor-pointer z-50">
            <img src="play-button.svg" className="w-[30px] h-[30px]" />
            <span>How to start</span>
          </div>
        </div>
      </div>
    </main>
  );
}
