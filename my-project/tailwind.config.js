/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#414eed", // Ihr benutzerdefinierter Farbname und Wert
      },
    },
  },
  plugins: [],
};
