const page1Selector = document.getElementById("page1Circle");
const page2Selector = document.getElementById("page2Circle");
const page3Selector = document.getElementById("page3Circle");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

console.log(page3);

page1Selector.addEventListener("click", () => {
  console.log("1 clicked");

  page1.classList.remove("hidden");
  page2.classList.add("hidden");
  page3.classList.add("hidden");

  page1Selector.style.backgroundColor = "white";
  page2Selector.style.backgroundColor = "#434348";
  page3Selector.style.backgroundColor = "#434348";
});
page2Selector.addEventListener("click", () => {
  console.log("2 clicked");

  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  page3.classList.add("hidden");

  page1Selector.style.backgroundColor = "#434348";
  page2Selector.style.backgroundColor = "white";
  page3Selector.style.backgroundColor = "#434348";
});
page3Selector.addEventListener("click", () => {
  console.log("3 clicked");

  page1.classList.add("hidden");
  page2.classList.add("hidden");
  page3.classList.remove("hidden");

  page1Selector.style.backgroundColor = "#434348";
  page2Selector.style.backgroundColor = "#434348";
  page3Selector.style.backgroundColor = "white";
});
