/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light:'white',
        dark:'black',
        dark_gray:'#374151',
        light_gray:'#f9fafb',
        light_gray200:"#f9fafb",
        dark_gray800:"#1f2937",
        light_gray300:"#d1d5db",
        blue500:"#3b82f6",
        light_yellow:"#fde047",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),  // Add tailwind scrollbar plugin
  ],
};
