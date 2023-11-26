// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".grid-cols-custom": {
          gridTemplateColumns: "1fr min(1140px, 94%) 1fr",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
