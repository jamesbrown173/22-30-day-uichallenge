import Lenis from "lenis";

const sliderCircles = document.querySelectorAll(".ball");
const sliderTexts = document.querySelectorAll(".form__slider-labels span");

// Default Slider State
sliderTexts[1].style.color = "#e3c045";
sliderCircles[3].style.backgroundColor = "#e3c045";

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

console.log(sliderTexts);

// Add 'yellow-text' class to all text labels initially
// sliderTexts.forEach((text) => {
//   text.classList.add("yellow-text"); // Corrected the method to add the class
// });

// Loop through all circles and add a click event listener
sliderCircles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    // Remove yellow background from all circles
    sliderCircles.forEach((c) => (c.style.backgroundColor = ""));

    // Set the background color of the clicked circle to yellow
    circle.style.backgroundColor = "#e3c045";

    // Reset the color of all text labels to default
    sliderTexts.forEach((text) => (text.style.color = ""));

    // // Set the text color based on the clicked circle's index
    if (index === 0 || index === 1) {
      sliderTexts[0].style.color = "#e3c045"; // First two circles
    } else if (index >= 2 && index <= 4) {
      sliderTexts[1].style.color = "#e3c045"; // Circles 3, 4, and 5
    } else if (index >= 5 && index <= 6) {
      sliderTexts[2].style.color = "#e3c045"; // Circles 6 and 7
    }
  });
});
