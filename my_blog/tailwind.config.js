/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        turnRight: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        turnLeft: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        openDetail: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        openSideNav: {
          "0%": { transform: "translateX(-100%) " },
          "100%": { transform: "translateX(0%) " },
        },
      },
      animation: {
        turnRight: "turnRight 0.5s linear 1",
        turnLeft: "turnLeft 0.5s linear 1",
        openDetail: "openDetail 0.2s linear 1",
        openSideNav: "openSideNav 0.2s linear 1",
      },
    },
  },
  plugins: [],
};
