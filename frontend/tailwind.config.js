/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};




/**
 * Tailwind automatically generates utility classes based on the configuration you define. When you define 'auto' under gridTemplateColumns, Tailwind creates a utility class called grid-cols-auto that applies the corresponding CSS property value (repeat(auto-fill, minmax(200px, 1fr))).
 * This mapping allows you to use grid-cols-auto in your HTML or JSX, while the configuration in tailwind.config.js remains focused on defining the specific values for CSS properties
 */
