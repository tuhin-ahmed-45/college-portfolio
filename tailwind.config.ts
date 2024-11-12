import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            poppins: ["var(--font-poppins)"],
         },
         animation: {
            scroll:
               "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            spotlight: "spotlight 2s ease .75s 1 forwards",
         },
         keyframes: {
            scroll: {
               to: {
                  transform: "translate(calc(-50% - 0.5rem))",
               },
            },
            shimmer: {
               from: {
                  backgroundPosition: "0 0",
               },
               to: {
                  backgroundPosition: "-200% 0",
               },
            },
            spotlight: {
               "0%": {
                  opacity: "0",
                  transform: "translate(-72%, -62%) scale(0.5)",
               },
               "100%": {
                  opacity: "1",
                  transform: "translate(-50%,-40%) scale(1)",
               },
            },
         },
         colors: {
            black: {
               DEFAULT: "#000",
               "100": "#000319", // Ensure the key "100" is a string
            },
         },
      },
   },
   plugins: [],
};

export default config;
