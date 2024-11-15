const ageSlider = document.getElementById("inputSliderAge");
const yearlyContAmountSlider = document.getElementById(
  "inputSliderYearlyContributionAmount"
);
const ageDisplayNumber = document.getElementById("age");
const yearlyContDisplayNumber = document.getElementById("yearContAmount");

// ---
// Set initial values
// ---
document.documentElement.style.setProperty("--age-slider-percentage", `50%`);
document.documentElement.style.setProperty(
  "--yearly-cont-slider-percentage",
  `50%`
);

// ---
// Listen for slider change
// ---

ageSlider.addEventListener("input", (event) => {
  const max = ageSlider.max;
  const value = event.target.value;
  const percentage = (value / max) * 100;

  console.log(`Age Slider is at ${percentage}%`);
  // Update styles
  document.documentElement.style.setProperty(
    "--age-slider-percentage",
    `${percentage}%`
  );
  // Update Number
  ageDisplayNumber.innerHTML = value;
});

yearlyContAmountSlider.addEventListener("input", (event) => {
  const max = yearlyContAmountSlider.max;
  const value = event.target.value;
  const percentage = (value / max) * 100;
  const valueFormatted = `$${value}`;

  console.log(`Yearly Cont Slider is at ${percentage}%`);
  document.documentElement.style.setProperty(
    "--yearly-cont-slider-percentage",
    `${percentage}%`
  );

  yearlyContDisplayNumber.innerHTML = valueFormatted;
});
