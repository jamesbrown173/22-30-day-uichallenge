import gsap from "gsap";

const page1Selector = document.getElementById("page1Circle");
const page2Selector = document.getElementById("page2Circle");
const page3Selector = document.getElementById("page3Circle");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const heroHeading = document.getElementById("heroSectionHeading");
const heroSubText = document.getElementById("heroSubText");

let currentPage = 2; // Start at page 2 by default
let autoplayInterval;
const AUTOPLAY_DELAY = 5000; // 5 seconds between transitions

// Function to handle showing a page
function showPage(pageNumber) {
  if (pageNumber === 1) {
    page1.classList.remove("hidden");
    page2.classList.add("hidden");
    page3.classList.add("hidden");

    page1Selector.style.backgroundColor = "white";
    page2Selector.style.backgroundColor = "#434348";
    page3Selector.style.backgroundColor = "#434348";

    heroHeading.innerText = "Level Up Your Trading";
    heroSubText.innerText =
      "Get personalised tips and insights to improve your trading";

    // Create timeline for page 1 animations
    const tl = gsap.timeline();

    tl.from(page1, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(
        ".heroSection__graphCard--profitFactor",
        {
          y: 40,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".heroSection__graphCard--winRate",
        {
          y: 40,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        ".heroSection__graphCard--large",
        {
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
  } else if (pageNumber === 2) {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    page3.classList.add("hidden");

    page1Selector.style.backgroundColor = "#434348";
    page2Selector.style.backgroundColor = "white";
    page3Selector.style.backgroundColor = "#434348";

    heroHeading.innerText = "Unlock the Market's Secrets";
    heroSubText.innerText = "Track how market indicators affect your stats.";

    // Create timeline for page 2 animations
    const tl = gsap.timeline();

    tl.from(page2, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(
        ".heroSection__tipCard",
        {
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".heroSection__graphCard--purple, .heroSection__graphCard--green",
        {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".heroSection__dataCard",
        {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
  } else if (pageNumber === 3) {
    page1.classList.add("hidden");
    page2.classList.add("hidden");
    page3.classList.remove("hidden");

    page1Selector.style.backgroundColor = "#434348";
    page2Selector.style.backgroundColor = "#434348";
    page3Selector.style.backgroundColor = "white";

    heroHeading.innerText = "Share your verified profile on social media";
    heroSubText.innerText =
      "Let your followers know about your trading journey and insights!";

    // Create timeline for page 3 animations
    const tl = gsap.timeline();

    tl.from(page3, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(
        ".heroSection__calendarCard",
        {
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".heroSection__badgeCard",
        {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }
}

function startAutoplay() {
  // Clear any existing interval first
  clearInterval(autoplayInterval);

  // Start a new interval
  autoplayInterval = setInterval(() => {
    currentPage = currentPage >= 3 ? 1 : currentPage + 1;
    showPage(currentPage);
  }, AUTOPLAY_DELAY);
}

// Add click event listeners
page1Selector.addEventListener("click", () => {
  currentPage = 1;
  showPage(1);
  startAutoplay(); // Restart the timer
});

page2Selector.addEventListener("click", () => {
  currentPage = 2;
  showPage(2);
  startAutoplay(); // Restart the timer
});

page3Selector.addEventListener("click", () => {
  currentPage = 3;
  showPage(3);
  startAutoplay(); // Restart the timer
});

// Initial start of autoplay
startAutoplay();
