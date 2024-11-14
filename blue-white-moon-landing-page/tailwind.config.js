/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top 2rem",
      "top-small": "center top 10rem",
    },
    screens: {
      sm: "576px",
      smCustom: "620px",
      smCustom755: "755px",

      md: "960px",

      lg: "1100px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeBlue: "#3677E4",
        borderBlue: "#014DCC",
      },
      borderRadius: {
        round30: "30px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(0deg, #3B82F6 0%, #0049BF 100%)",
      },
      boxShadow: {
        custom:
          "inset 0px -3.95px 3.95px 0px rgba(59, 130, 246, 0.25), " +
          "inset 0px -3.95px 21.74px 0px rgba(39, 132, 255, 0.55), " +
          "0px 1.58px 3.16px 0px rgba(59, 130, 246, 0.25), " +
          "0px 3.16px 24.43px 0px rgba(59, 130, 246, 0.46), " +
          "0px 3.16px 15.49px 0px rgba(59, 130, 246, 0.25), " +
          "0px 3.16px 197.62px 0px rgba(59, 130, 246, 0)",
      },
      boxShadow: {
        buttonShadow: "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%)",
        innerWhiteShadow:
          "box-shadow: inset 0px 0px 43.91779327392578px 0px rgba(255, 255, 255, 5%)",
      },
    },
  },
  plugins: [],
};
