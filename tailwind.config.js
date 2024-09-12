/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".backdrop-blur": {
            "backdrop-filter": "blur(10px)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
