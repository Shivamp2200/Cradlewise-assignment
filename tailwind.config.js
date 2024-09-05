/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'basier-circle': ['Basier Circle', 'sans-serif'],
      },
      colors: {
        customBackground: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
