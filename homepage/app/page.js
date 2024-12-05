"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Indie_Flower } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faSlack,
  faCalendar,
} from "@fortawesome/free-brands-svg-icons";
import Container from "./components/Container";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
});

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Set initial positions for different card groups
    gsap.set(".left-cards .card-item", {
      x: -400,
      opacity: 0,
    });

    gsap.set(".bottom-left-cards .card-item", {
      y: 400,
      opacity: 0,
    });

    gsap.set(".bottom-right-cards .card-item", {
      y: 600,
      x: -200,
      opacity: 0,
      rotate: 12,
    });

    gsap.set(".right-cards .card-item", {
      x: 400,
      opacity: 0,
    });

    gsap.set(".hero-item", {
      y: 100,
      opacity: 0,
    });

    // Animate all elements simultaneously
    gsap.to(
      [
        ".left-cards .card-item",
        ".bottom-left-cards .card-item",
        ".bottom-right-cards .card-item",
        ".right-cards .card-item",
        ".hero-item",
      ],
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: {
          amount: 1.2,
          // from: "random",
        },
      }
    );

    // Add hover animations
    const container = document.querySelector(".card-container");
    if (container) {
      container.addEventListener("mouseenter", () => {
        gsap.to(".card-item", {
          y: (i) => [30, 0, -30][i],
          x: (i) => [0, 20, 0][i],
          duration: 0.3,
          ease: "power2.out",
          stagger: {
            amount: 0.1,
            from: "start",
          },
        });
      });

      container.addEventListener("mouseleave", () => {
        gsap.to(".card-item", {
          y: 0,
          x: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      });
    }

    // Cleanup event listeners
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", () => {});
        container.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Container>
        <nav className="flex justify-between items-center pt-4 bg-white text-black">
          <div className="nav-color-wrapper w-full flex justify-between items-center px-5 py-3 rounded-2xl">
            <div className="text-xl font-bold flex items-center ">
              <div className="relative z-10 bg-white rounded-2xl p-3 w-12 h-11 flex flex-wrap justify-center items-center gap-0.5">
                <div className="w-2 h-2 rounded-full bg-[#0EB4EB]"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>
              <span className="text-2xl font-medium">ChronoTask</span>
            </div>
            <div className="flex space-x-8">
              <span>Features</span>
              <span>Solutions</span>
              <span>Resources</span>
              <span>Pricing</span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-transparent text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
                Sign In
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Get Demo
              </button>
            </div>
          </div>
        </nav>

        <section className="border-[1px] border-[#DFE0E0] border-solid flex flex-col justify-center items-center my-4 min-h-[88vh] rounded-2xl relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage:
                "radial-gradient(circle, #E7E7E7 0.5px, #ffffff 0.5px)",
              backgroundSize: "3px 3px",
              transform: "rotate(45deg) scale(3.7)",
              zIndex: 0,
            }}
          />
          {/* Items top left */}
          <div className="absolute top-16 left-0 z-10 flex flex-col items-end gap-4 md:left-10 lg:left-20 left-cards cursor-pointer md:scale-100 scale-75">
            <div className="relative -left-14  z-20">
              <div className="card-item bg-white rounded-2xl shadow-xl p-6 w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] z-20 absolute top-40 left-14">
                <div className="w-full h-full flex items-center justify-center bg-[#3C85EE] rounded-xl">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[56px] sm:h-[56px]"
                  >
                    <path
                      d="M20 34L36 18L33.172 15.172L20 28.344L14.828 23.172L12 26L20 34Z"
                      fill="white"
                      rx="4"
                    />
                  </svg>
                </div>
              </div>
              <div className="card-item bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] z-10 absolute -left-12 top-28 rotate-12"></div>
              <div className="card-item bg-[#FFF088] shadow-lg p-3 pt-6 w-[170px] h-[160px] sm:w-[210px] sm:h-[200px] transform rotate-2 absolute left-4">
                <img
                  src="pin1.svg"
                  alt="Decorative pin"
                  className="w-8 h-8 sm:w-10 sm:h-10 absolute -top-7 left-1/2 -translate-x-1/2"
                />
                <div className="text-base sm:text-xl text-gray-700 font-handwriting font-medium leading-5 sm:leading-5">
                  Take notes to keep track of crucial details, and accomplish
                  more tasks with ease.
                </div>
              </div>
            </div>
          </div>

          {/* Items bottom left */}
          <div className="absolute -bottom-56 md:-bottom-38 lg:-bottom-[240px] -rotate-2 left-0 z-10 flex flex-col items-end gap-4 md:left-10 lg:left-[60px] bottom-left-cards cursor-pointer md:scale-100 scale-50">
            <div className="relative">
              <div className="card-item bg-[#F1F2F4] rounded-2xl shadow-xl p-4 sm:p-6 w-[280px] xs:w-[340px] sm:w-[340px] relative border-[1px] border-[#DFE0E0] border-solid transform scale-75 sm:scale-90 md:scale-100">
                <h2 className="text-xl font-semibold mb-4 text-black ">
                  Today's tasks
                </h2>

                {/* Task Item 1 */}
                <div className="mb-4 bg-white rounded-xl px-2 py-2 border-[1px] border-[#DFE0E0] border-solid">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#FF5733] text-white px-2 py-1 rounded-md text-sm">
                        8
                      </span>
                      <span className="text-gray-800">
                        New Ideas for campaign
                      </span>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">Sep 10</div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[60%] bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-right text-sm text-gray-600">60%</div>
                </div>

                {/* Task Item 2 */}
                <div className="mb-4 bg-white rounded-xl px-2 py-2 border-[1px] border-[#DFE0E0] border-solid">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#4CAF50] text-white px-2 py-1 rounded-md text-sm">
                        3
                      </span>
                      <span className="text-gray-800">Design PPT #4</span>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">Sep 18</div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[12%] bg-red-400 rounded-r-full"></div>
                  </div>
                  <div className="text-right text-sm text-gray-600">112%</div>
                </div>

                {/* Task Item 3 */}
                <div className="mb-4 bg-white rounded-xl px-2 py-2 border-[1px] border-[#DFE0E0] border-solid">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#9C27B0] text-white px-2 py-1 rounded-md text-sm">
                        5
                      </span>
                      <span className="text-gray-800">
                        Review Marketing Plan
                      </span>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">Sep 20</div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[25%] bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-right text-sm text-gray-600">25%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Items Bottom Right */}
          <div className="absolute -bottom-[260px] md:-bottom-36 lg:-bottom-[170px] origin-top-right rotate-2 right-10 z-10 flex flex-col items-end gap-4 md:left-10 lg:left-20 bottom-right-cards cursor-pointer md:scale-100 scale-50">
            <div className="relative">
              <div className="card-item bg-[#F1F2F4] rounded-2xl shadow-xl p-4 sm:p-6 w-[280px] xs:w-[320px] sm:w-[320px] relative border-[1px] border-[#DFE0E0] border-solid transform scale-75 sm:scale-90 md:scale-100 h-[400px]">
                <h3 className="text-2xl font-semibold mb-6 text-black">
                  100+ Integrations
                </h3>
                <div className="flex gap-4 relative w-full">
                  <div className="bg-white rounded-2xl p-2 w-[90px] h-[90px] flex items-center justify-center -rotate-6 top-8 left-2 absolute shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">
                    <img
                      src="/gmail-icon.svg"
                      alt="Gmail"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-2 w-[90px] h-[90px] flex items-center justify-center absolute left-[50%] -translate-x-1/2 top-2 z-30 shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">
                    <img
                      src="/slack-icon.svg"
                      alt="Slack"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-2 w-[90px] h-[90px] flex items-center justify-center rotate-6 absolute top-8 right-2 shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">
                    <img
                      src="/calendar-icon.svg"
                      alt="Google Calendar"
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Items Top Right */}
          <div className="absolute top-16 right-0 z-10 flex flex-col items-start gap-4 md:right-0 lg:right-0 right-cards cursor-pointer md:scale-100 scale-50">
            <div className="relative">
              <div className="card-item bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] z-10 absolute -right-16 top-32 rotate-12"></div>
              <div className="card-item bg-[#F8F8F8] rounded-2xl p-3 w-[80px] h-[80px] flex items-center justify-center shadow-[4px_4px_10px_rgba(0,0,0,0.1)] absolute top-12 right-[260px] z-30">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 7V12L15.5 11"
                    stroke="red"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="card-item bg-[#F1F2F4] rounded-3xl shadow-xl p-4 w-[280px] border-[1px] border-[#DFE0E0] border-solid absolute right-0 top-0 rotate-12">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-normal text-[#090909]">
                    Reminders
                  </h3>
                </div>
                <div className="text-gray-400 text-xs font-light text-[#BCBCBC] mb-2 bg-[#FAFAFA] rounded-full px-3 py-1 border-[1px] border-[#DFE0E0] border-solid text-center">
                  Meetings
                </div>

                <div className="bg-[#FAFAFA] rounded-2xl p-5 border-[1px] border-[#DFE0E0] border-solid shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
                  <div className="text-sm font-normal mb- text-[#1B1B1B]">
                    Today's Meeting
                  </div>
                  <div className="text-[#BBB] text-xs mb-6">
                    Call with marketing team
                  </div>

                  <div className="flex items-start bg-white flex-col justify-center p-2">
                    <div className="flex items-center flex-col">
                      <div className="text-gray-400 text-xs">Time</div>
                      <div className="ml-2 bg-[#DAF5FD] text-[#2787B5] px-3 py-1 rounded-lg text-xs flex items-center gap-1">
                        <img
                          src="clock-icon.svg"
                          className="h-4 w-4"
                          alt="Clock icon"
                        />
                        <span>13:00 - 13:45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-content relative text-center z-10 pointer-events-none">
            <div className="hero-item mx-auto mb-10 relative z-10 bg-white rounded-2xl shadow-[8px_12px_12px_rgba(0,0,0,0.3)] p-3 w-20 h-20 flex flex-wrap justify-center items-center gap-1.5 border-[1px] border-[#DFE0E0] border-solid">
              <div className="w-5 h-5 rounded-full bg-[#0EB4EB]"></div>
              <div className="w-5 h-5 rounded-full bg-[#353334]"></div>
              <div className="w-5 h-5  rounded-full bg-[#353334]"></div>
              <div className="w-5 h-5  rounded-full bg-[#353334]"></div>
            </div>
            <h1 className="hero-item text-6xl md:text-7xl lg:text-8xl font-normal text-black">
              Think, plan, and track
            </h1>
            <h1 className="hero-item text-6xl md:text-7xl lg:text-8xl font-normal mb-6 text-gray-400">
              all in one place
            </h1>
            <p className="hero-item text-xl mb-8 text-gray-800">
              Efficiently manage your tasks and boost productivity.
            </p>
            <button className="hero-item bg-blue-500 text-white px-12 py-4 rounded-lg text-xl font-normal hover:bg-blue-600 transition-colors">
              Get free demo
            </button>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Home;
