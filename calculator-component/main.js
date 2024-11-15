import Chart from "chart.js/auto";

const ageSlider = document.getElementById("inputSliderAge");
const yearlyContAmountSlider = document.getElementById(
  "inputSliderYearlyContributionAmount"
);
const ageDisplayNumber = document.getElementById("age");
const yearlyContDisplayNumber = document.getElementById("yearContAmount");
const amountInvestedResultNumber = document.getElementById(
  "amountInvestedResult"
);
const investmentEarningsResultNumber = document.getElementById(
  "investmentEarningsResult"
);
const retirementAmountResultNumber = document.getElementById(
  "retirementAmountResult"
);

let chart;

// -------------------------------------------------------------------------------
// Calculation Logic for Amounts
// -------------------------------------------------------------------------------

function calculateInvestmentDetails(
  age,
  yearlyContribution,
  interestRate = 0.09,
  retirementAge = 65
) {
  const yearsUntilRetirement = retirementAge - age;
  const amountInvested = yearlyContribution * yearsUntilRetirement;

  let rollingBalance = 0;
  let investmentEarnings = 0;

  for (let i = 0; i < yearsUntilRetirement; i++) {
    rollingBalance += yearlyContribution;
    const yearlyInterest = rollingBalance * interestRate;
    investmentEarnings += yearlyInterest;
    rollingBalance += yearlyInterest;
  }

  const retirementAmount = amountInvested + investmentEarnings;

  return {
    amountInvested: amountInvested.toFixed(2),
    investmentEarnings: investmentEarnings.toFixed(2),
    retirementAmount: retirementAmount.toFixed(2),
  };
}

// -------------------------------------------------------------------------------
// Generate Data for Chart
// -------------------------------------------------------------------------------

function generateChartData(
  startAge,
  yearlyContribution,
  interestRate = 0.09,
  retirementAge = 65
) {
  const data = [];
  let rollingBalance = 0;
  let cumulativeContributions = 0;

  for (let currentAge = startAge; currentAge <= retirementAge; currentAge++) {
    cumulativeContributions += yearlyContribution; // Add yearly contribution to cumulative total
    const yearlyInterest = rollingBalance * interestRate; // Calculate yearly interest
    rollingBalance += yearlyContribution + yearlyInterest; // Update rolling balance

    data.push({
      age: currentAge,
      count: cumulativeContributions.toFixed(2), // Cumulative contributions
      withInvestCount: rollingBalance.toFixed(2), // Rolling balance with interest
    });
  }

  return data;
}

// -------------------------------------------------------------------------------
// Update or Initialize Chart
// -------------------------------------------------------------------------------

function updateChart(age, yearlyContribution) {
  const chartData = generateChartData(age, yearlyContribution);
  const labels = chartData.map((row) => row.age);
  const countData = chartData.map((row) => row.count);
  const withInvestData = chartData.map((row) => row.withInvestCount);

  if (!chart) {
    const ctx = document.getElementById("acquisitions").getContext("2d");

    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Retirement Savings",
            data: countData,
            backgroundColor: "#69AFFE",
            borderColor: "#69AFFE",
            fill: true,
            tension: 0.2,
            pointRadius: 0,
          },
          {
            label: "Retirement Savings with Investment",
            data: withInvestData,
            backgroundColor: "#FFE0E2",
            borderColor: "#FFE0E2",
            fill: "-1",
            tension: 0.2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: { color: "#F8FAFD" },
            border: {
              display: true,
              color: "#F8FAFD", // Set the border color
            },
            ticks: {
              font: {
                family: "Inter", // Set font to Inter for Y-axis ticks
                size: 12,
              },
              callback: function (value, index, ticks) {
                return index % 6 === 0 ? this.getLabelForValue(value) : ""; // Show every other tick
              },
              color: "#B3B3B3",
            },
          },
          y: {
            ticks: {
              callback: function (value) {
                if (value >= 1000000) {
                  return `${(value / 1000000).toFixed(1)}m`; // Format in millions
                } else if (value >= 1000) {
                  return `${(value / 1000).toFixed(0)}k`; // Format in thousands
                } else {
                  return value; // Default format for smaller values
                }
              },
              color: "#B3B3B3",
            },
            grid: {
              drawOnChartArea: true,
              display: false,
            },
          },
        },
      },
    });
  } else {
    chart.data.labels = labels;
    chart.data.datasets[0].data = countData;
    chart.data.datasets[1].data = withInvestData;
    chart.update();
  }
}

// -------------------------------------------------------------------------------
// Update Output Calculations and Chart
// -------------------------------------------------------------------------------

function updateCalculations() {
  const age = parseInt(ageSlider.value, 10);
  const yearlyContribution = parseInt(yearlyContAmountSlider.value, 10);

  const result = calculateInvestmentDetails(age, yearlyContribution);

  const formattedYearlyContribution = formatAmount(yearlyContribution);
  const formattedAmountInvested = formatAmount(result.amountInvested);
  const formattedInvestmentEarnings = formatAmount(result.investmentEarnings);
  const formattedRetirementAmount = formatAmount(result.retirementAmount);

  ageDisplayNumber.innerHTML = age;
  yearlyContDisplayNumber.innerHTML = formattedYearlyContribution;
  amountInvestedResultNumber.innerHTML = formattedAmountInvested;
  investmentEarningsResultNumber.innerHTML = formattedInvestmentEarnings;
  retirementAmountResultNumber.innerHTML = formattedRetirementAmount;
}

function updateCalculationsAndChart() {
  const age = parseInt(ageSlider.value, 10);
  const yearlyContribution = parseInt(yearlyContAmountSlider.value, 10);

  const ageMin = parseInt(ageSlider.min, 10);
  const ageMax = parseInt(ageSlider.max, 10);
  const yearlyMin = parseInt(yearlyContAmountSlider.min, 10);
  const yearlyMax = parseInt(yearlyContAmountSlider.max, 10);

  // Calculate slider percentages
  const agePercentage = ((age - ageMin) / (ageMax - ageMin)) * 100;
  const yearlyPercentage =
    ((yearlyContribution - yearlyMin) / (yearlyMax - yearlyMin)) * 100;

  // Update CSS custom properties for slider styling
  document.documentElement.style.setProperty(
    "--age-slider-percentage",
    `${agePercentage}%`
  );
  document.documentElement.style.setProperty(
    "--yearly-cont-slider-percentage",
    `${yearlyPercentage}%`
  );

  updateCalculations();
  updateChart(age, yearlyContribution);
}

// -------------------------------------------------------------------------------
// Format The Results
// -------------------------------------------------------------------------------

function formatAmount(amount) {
  return `$${parseFloat(amount).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

// -------------------------------------------------------------------------------
// Event Listeners for Sliders
// -------------------------------------------------------------------------------

ageSlider.addEventListener("input", updateCalculationsAndChart);
yearlyContAmountSlider.addEventListener("input", updateCalculationsAndChart);

// -------------------------------------------------------------------------------
// Initial Setup
// -------------------------------------------------------------------------------

updateCalculationsAndChart();

// // ------------------- -------------------------------------- -------------------  ------------------- -------------------PRE CJANGES

// import Chart from "chart.js/auto";

// const ageSlider = document.getElementById("inputSliderAge");
// const yearlyContAmountSlider = document.getElementById(
//   "inputSliderYearlyContributionAmount"
// );
// const ageDisplayNumber = document.getElementById("age");
// const yearlyContDisplayNumber = document.getElementById("yearContAmount");
// const amountInvestedResultNumber = document.getElementById(
//   "amountInvestedResult"
// );
// const investmentEarningsResultNumber = document.getElementById(
//   "investmentEarningsResult"
// );
// const retirementAmountResultNumber = document.getElementById(
//   "retirementAmountResult"
// );

// // -------------------------------------------------------------------------------
// // Calculation Logic for Amounts
// //
// // Amount Invested = Yearly Contribution * (65 - Age)
// // Investment Earings =  9% of the yearly investment amount which compounds for (65 - Age) years.
// // Retirement Amount =  Total Amount Contributed + The cumulative 9% per year for (65 - Age) years.
// // -------------------------------------------------------------------------------

// function calculateInvestmentDetails(
//   age,
//   yearlyContribution,
//   interestRate = 0.09,
//   retirementAge = 65
// ) {
//   // Calculate the number of years until retirement
//   const yearsUntilRetirement = retirementAge - age;

//   // Calculate the Amount Invested
//   const amountInvested = yearlyContribution * yearsUntilRetirement;

//   // Calculate Investment Earnings with rolling compound interest
//   let rollingBalance = 0;
//   let investmentEarnings = 0;

//   for (let i = 0; i < yearsUntilRetirement; i++) {
//     // Add yearly contribution to the rolling balance
//     rollingBalance += yearlyContribution;

//     // Calculate interest earned on the current rolling balance
//     const yearlyInterest = rollingBalance * interestRate;

//     // Add this year's interest to total investment earnings
//     investmentEarnings += yearlyInterest;

//     // Update the rolling balance to include this year's interest
//     rollingBalance += yearlyInterest;
//   }

//   // Calculate the Total at Retirement
//   const retirementAmount = amountInvested + investmentEarnings;

//   return {
//     amountInvested: amountInvested.toFixed(2),
//     investmentEarnings: investmentEarnings.toFixed(2),
//     retirementAmount: retirementAmount.toFixed(2),
//   };
// }

// // -------------------------------------------------------------------------------
// // Set initial values
// // -------------------------------------------------------------------------------
// document.documentElement.style.setProperty("--age-slider-percentage", `50%`);
// document.documentElement.style.setProperty(
//   "--yearly-cont-slider-percentage",
//   `50%`
// );
// const age = 30;
// const yearlyContribution = 4491;
// updateCalculations();

// // -------------------------------------------------------------------------------
// // Update OutPut calculations
// // -------------------------------------------------------------------------------

// // Update displayed values based on the sliders' positions
// function updateCalculations() {
//   const age = parseInt(ageSlider.value, 10);
//   const yearlyContribution = parseInt(yearlyContAmountSlider.value, 10);

//   const result = calculateInvestmentDetails(age, yearlyContribution);

//   // Use the helper function to format all amounts
//   const formattedYearlyContribution = formatAmount(yearlyContribution);
//   const formattedAmountInvested = formatAmount(result.amountInvested);
//   const formattedInvestmentEarnings = formatAmount(result.investmentEarnings);
//   const formattedRetirementAmount = formatAmount(result.retirementAmount);

//   // Update HTML elements with formatted values
//   ageDisplayNumber.innerHTML = age;
//   yearlyContDisplayNumber.innerHTML = formattedYearlyContribution;
//   amountInvestedResultNumber.innerHTML = formattedAmountInvested;
//   investmentEarningsResultNumber.innerHTML = formattedInvestmentEarnings;
//   retirementAmountResultNumber.innerHTML = formattedRetirementAmount;
// }

// // -------------------------------------------------------------------------------
// // Format The Results
// // -------------------------------------------------------------------------------

// function formatAmount(amount) {
//   return `$${parseFloat(amount).toLocaleString("en-US", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   })}`;
// }

// // -------------------------------------------------------------------------------
// // Listen for slider change
// // -------------------------------------------------------------------------------

// ageSlider.addEventListener("input", (event) => {
//   const min = parseInt(ageSlider.min, 10); // Get the minimum value of the slider
//   const max = parseInt(ageSlider.max, 10); // Get the maximum value of the slider
//   const value = parseInt(event.target.value, 10);

//   // Adjusted percentage calculation based on min and max values
//   const percentage = ((value - min) / (max - min)) * 100;

//   console.log(`Age Slider is at ${percentage}%`);
//   console.log(`Age slider amount is: ${value}`);

//   // Update styles
//   document.documentElement.style.setProperty(
//     "--age-slider-percentage",
//     `${percentage}%`
//   );

//   // Update Numbers
//   ageDisplayNumber.innerHTML = value;

//   updateCalculations();
// });

// yearlyContAmountSlider.addEventListener("input", (event) => {
//   const max = yearlyContAmountSlider.max;
//   const value = event.target.value;
//   const percentage = (value / max) * 100;
//   const valueFormatted = `$${value}`;

//   console.log(`Yearly Cont Slider is at ${percentage}%`);
//   console.log(`Yearly Cont amount is: ${value}`);
//   document.documentElement.style.setProperty(
//     "--yearly-cont-slider-percentage",
//     `${percentage}%`
//   );

//   yearlyContDisplayNumber.innerHTML = valueFormatted;

//   updateCalculations();
// });

// // -------------------------------------------------------------------------------
// // The Chart
// // -------------------------------------------------------------------------------

// (async function () {
//   const data = [
//     { age: 59, count: 15000, withInvestCount: 17000 },
//     { age: 60, count: 16000, withInvestCount: 18000 },
//     { age: 61, count: 17000, withInvestCount: 19000 },
//     { age: 62, count: 18000, withInvestCount: 20000 },
//     { age: 63, count: 19000, withInvestCount: 21000 },
//     { age: 64, count: 20000, withInvestCount: 22000 },
//     { age: 65, count: 20500, withInvestCount: 22500 },
//   ];

//   const ctx = document.getElementById("acquisitions").getContext("2d");

//   new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: data.map((row) => row.age),
//       datasets: [
//         {
//           label: "Retirement Savings", // Label for the first line
//           data: data.map((row) => row.count),
//           backgroundColor: "#6895FF", // Use the gradient as the background color
//           borderColor: "#6895FF", // Border color for the line
//           fill: true, // Fill the area under the line
//           tension: 0.2, // Smooth the line curve
//           pointRadius: 0,
//         },
//         {
//           label: "Retirement Savings with Investment", // Label for the second stacked line
//           data: data.map((row) => row.withInvestCount),
//           backgroundColor: "#FFE0E2",
//           borderColor: "#FFE0E2",
//           fill: "-1",
//           tension: 0.2,
//           pointRadius: 0,
//         },
//       ],
//     },
//     options: {
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//       scales: {
//         x: {
//           title: {
//             display: false,
//             text: "Age",
//           },
//           ticks: {
//             color: "#B3B3B3",
//           },
//         },
//         y: {
//           grid: {
//             z: 99,
//             display: false,
//             fill: 1, // Hide the grid lines on the X-axis
//           },
//           title: {
//             display: false,
//             text: "Amount ($)",
//           },
//           ticks: {
//             color: "#B3B3B3",
//             callback: function (value) {
//               return value >= 1000 ? `${value / 1000}k` : value;
//             },
//           },
//         },
//       },
//     },
//   });
// })();
