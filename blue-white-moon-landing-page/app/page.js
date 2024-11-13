import Image from "next/image";
import BackgroundSemiCircleWithAnimations from "@/components/BackgroundSemiCircleWithAnimations";
import DarkButton from "@/components/DarkButton";

export default function Home() {
  return (
    <main className="app   flex w-full h-[80vh] flex-col items-center relative justify-end ">
      <BackgroundSemiCircleWithAnimations />
      <div className="flex flex-col justify-center items-center mb-[130px] overflow-hidden">
        <img
          src="dollar-lonely.png"
          className="custom-shadow relative h-[400px] w-[400px] top-[112px]"
        />
        <h1 className="text-5xl lg:max-w-[50vw] max-w-[80vw] text-center font-semibold leading-[51px] tracking-normal text-stroke text-stroke drop-shadow-lg">
          Bring Interested Clients & Get Paid As Never Before!
        </h1>
        <p className="font-light lg:max-w-[40vw] sm:max-w-[60vw] text-center  leading-[20px] italic mt-[20px]">
          <span className="font-bold">Number #1 Affiliate</span> Platform that
          provides you marketing assets Higher payout, dedicated support and
          mentoring, All in one!
        </p>

        {/* --- Buttons Container --- */}
        <div className="flex gap-10 pt-[20px] text-base">
          <DarkButton
            innerText="Start Earning Today"
            additionalSytles="px-6 py-[20px]"
          />
          <div className="flex justify-center items-center gap-2 box-shadow-xl">
            <img src="play-button.svg" className="w-[30px]" />
            <span>How to start</span>
          </div>
        </div>
      </div>
    </main>
  );
}
