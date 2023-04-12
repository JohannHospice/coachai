/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "rotate 15s linear infinite, scale 10s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite",
      },
      keyframes: {
        // blob: {
        //   "0%": {
        //     translate: "0 -5vh",
        //     scale: "1 1.25",
        //     rotate: "0deg",
        //   },
        //   "50%": {
        //     translate: "0 5vh",
        //     scale: ".75 1",
        //     rotate: "180deg",
        //   },
        //   "100%": {
        //     translate: "0 -5vh",
        //     scale: "1 1.25",
        //     rotate: "360deg",
        //   },
        // },
        rotate: {
          "0%": {
            rotate: "0deg",
          },
          "50%": {
            rotate: "180deg",
          },
          "100%": {
            rotate: "360deg",
          },
        },
        scale: {
          "0%, 100%": {
            scale: "1",
          },
          "50%": {
            scale: "1 1.25",
          },
        },
      },
    },
  },
  plugins: [],
};
