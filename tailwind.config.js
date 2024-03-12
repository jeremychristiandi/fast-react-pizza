/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: 'Quicksand, monospace'
    },
    
    extend: {
      // fontSize: {
      //   huge: ["80rem", {lineHeight: '1'}]
      // }
      height: {
        // this is a dynamic view port height
        screen: "100dvh"
      }
    },
  },
  plugins: [],
};
