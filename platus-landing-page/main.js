const main = document.querySelector(".main");

// Define properties for each orb
const orbs = [
  {
    width: 800,
    height: 900,
    opacity: 0.6,
    top: "-30%",
    right: "10%",
    color: "#E17025",
    rotate: "-55deg",
  },
  {
    width: 550,
    height: 900,
    opacity: 0.2,
    top: "-10%",
    right: "10%",
    color: "white",
    rotate: "15deg",
  },
  {
    width: 200,
    height: 900,
    top: "-30%",
    opacity: 0.1,
    left: "60%",
    color: "white",
    rotate: "-40deg",
  },
  {
    width: 300,
    height: 900,
    top: "0%",
    left: "30%",
    color: "#E4825A",
    rotate: "5deg",
    zIndex: 8,
  },
  {
    width: 300,
    height: 900,
    top: "-10%",
    left: "-10%",
    color: "#E47C4F",
    rotate: "5deg",
    zIndex: 9,
  },
];

// Loop through and create each orb
orbs.forEach((orb, index) => {
  const orbElement = document.createElement("div");
  orbElement.classList.add("orb");

  // Apply styles from the properties
  orbElement.style.width = `${orb.width}px`;
  orbElement.style.height = `${orb.height}px`;
  orbElement.style.top = orb.top;
  orbElement.style.left = orb.left;
  orbElement.style.opacity = orb.opacity;
  orbElement.style.zIndex = orb.zIndex;
  orbElement.style.backgroundColor = orb.color;
  orbElement.style.transform = `rotate(${orb.rotate})`;
  orbElement.style.animation = `orbAnimation ${5 + index * 5}s infinite`;

  // Append the orb to the main container
  main.appendChild(orbElement);
});
