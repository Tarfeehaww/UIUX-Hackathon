/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Scan all files in `app` directory
    './src/app/components/**/*.{js,ts,jsx,tsx}', // Scan components folder
    './src/app/pages/**/*.{js,ts,jsx,tsx}', // Scan pages folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


