/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        nunito: ['Nunito Sans', 'sans-serif'] 
      } ,
      
      backgroundColor: {
        dark:'hsl(207, 26%, 17%)',
      lightDark:'hsl(209, 23%, 22%)',
      lightMode:'hsl(0, 0%, 93%)'
      },
    },
  },
  plugins: [],
};
