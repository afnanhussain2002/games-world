/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainColor':'##a21caf'
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

