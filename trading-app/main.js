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

    gsap.from(page1, {
      y: 5,
      opacity: 0,
      duration: 0.5,
    });
  } else if (pageNumber === 2) {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    page3.classList.add("hidden");

    page1Selector.style.backgroundColor = "#434348";
    page2Selector.style.backgroundColor = "white";
    page3Selector.style.backgroundColor = "#434348";

    heroHeading.innerText = "Unlock the Market's Secrets";
    heroSubText.innerText = "Track how market indicators affect your stats.";

    gsap.from(page2, {
      y: 5,
      opacity: 0,
      duration: 0.5,
    });
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

    gsap.from(page3, {
      y: 5,
      opacity: 0,
      duration: 0.5,
    });
  }
}

// Add click event listeners
page1Selector.addEventListener("click", () => {
  currentPage = 1;
  showPage(1);
});

page2Selector.addEventListener("click", () => {
  currentPage = 2;
  showPage(2);
});

page3Selector.addEventListener("click", () => {
  currentPage = 3;
  showPage(3);
});

// Show the default page on load
showPage(currentPage);

// Auto-rotate logic
setInterval(() => {
  currentPage = (currentPage % 3) + 1; // Cycle through pages 1, 2, 3
  showPage(currentPage);
}, 5000); // Change every 5 seconds
