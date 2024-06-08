/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainColor':'#2C6771'
      }
    },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

