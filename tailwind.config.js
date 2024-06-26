/** / @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const mode = "jit";
export const variants = {
  backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd'],
};
export const theme = {
  extend: {
    backgroundColor: ['active'],
    backgroundImage: theme => ({
        'gradient-linear': 'linear-gradient(180deg, hsla(187, 69%, 24%, 1) 0%, hsla(188, 67%, 33%, 1) 100%)'
      }),
    colors: {
      primaryColor: "#0067FF",
      yellowColor: "#FEB60D",
      purpleColor: "#9771FF",
      irisBlueColor: "#0DB1E2",
      headingColor: "#181A1E",
      textColor: "#4E545F",
      darkGreen1: "#003C43",
      darkGreen2: "#135d66",
      darkGreen3: "#77B0AA",
      darkGreen4: "#1b7a8b",
      creme: "#dfebfaff",
      cremeHover: "#c9e5e8",
      greenHover: "#0E484F",
      searchBarGrey: "#EFEFF0",
      superLightGreen: "#E3FEF7",
      writingGrey: "#888888",
    },
    boxShadow: {
      panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
    },
    borderRadius: {
      50: "50px",
      20: "20px",
      "out-1": "-10px",
      "out-2": "-20px",
      "out-3": "-30px",
    },
    borderWidth: {
      3: "3px",
    },
    fontFamily: {
      'rubik': ["Rubik", "sans-serif"],
      'roboto': ["Roboto", "sans-serif"],
      'rubikBubbles': ['"Rubik Bubbles"', "system-ui"],
    },
    boxShadow: {
      panelShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    fontSize: {
      20: "20px",
    },
    fontWeight: {
      450: "450",
    },
  },
};
export const plugins = [];
