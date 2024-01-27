/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        15: "15px",
      },
      backgroundColor: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
      textColor: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
