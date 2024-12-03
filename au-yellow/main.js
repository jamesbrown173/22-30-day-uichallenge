import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Connect GSAP and Lenis
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Create a timeline for hero animations
const heroTimeline = gsap.timeline({
  defaults: {
    duration: 0.8,
    ease: "power2.out",
  },
});

// Wait for document load
window.addEventListener("load", () => {
  heroTimeline
    .from(".hero__logo-container", {
      y: -50,
      opacity: 0,
    })
    .from(
      ".hero__links-container span",
      {
        y: -30,
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.3"
    )
    .from(
      ".hero__heading-text-and-paragraph-container h1",
      {
        y: 50,
        opacity: 0,
      },
      "-=0.3"
    );
});

// Why us section animations
gsap.from(".why-us h3", {
  scrollTrigger: {
    trigger: ".why-us",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
});

gsap.from(".why-us > *:not(h3)", {
  scrollTrigger: {
    trigger: ".why-us",
    start: "top 70%",
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
});

// Our services cards
gsap.from(".our-services__card", {
  scrollTrigger: {
    trigger: ".our-services",
    start: "top 60%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});

// Our promise cards
gsap.from(".our-promise__card", {
  scrollTrigger: {
    trigger: ".our-promise",
    start: "top 70%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
});

// Case studies flip cards
gsap.from(".case-studies__container .flip-container", {
  scrollTrigger: {
    trigger: ".case-studies",
    start: "top 70%",
  },
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});

// Contact form animation
gsap.from(".contact-us__info-container-left", {
  scrollTrigger: {
    trigger: ".contact-us",
    start: "top 70%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from(".conact-us__form-container-right", {
  scrollTrigger: {
    trigger: ".contact-us",
    start: "top 70%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
});

// Slider functionality
const sliderCircles = document.querySelectorAll(".ball");
const sliderTexts = document.querySelectorAll(".form__slider-labels span");

// Default Slider State
sliderTexts[1].style.color = "#e3c045";
sliderCircles[3].style.backgroundColor = "#e3c045";

// Slider click handlers
sliderCircles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    sliderCircles.forEach((c) => (c.style.backgroundColor = ""));
    circle.style.backgroundColor = "#e3c045";
    sliderTexts.forEach((text) => (text.style.color = ""));

    if (index === 0 || index === 1) {
      sliderTexts[0].style.color = "#e3c045";
    } else if (index >= 2 && index <= 4) {
      sliderTexts[1].style.color = "#e3c045";
    } else if (index >= 5 && index <= 6) {
      sliderTexts[2].style.color = "#e3c045";
    }
  });
});
