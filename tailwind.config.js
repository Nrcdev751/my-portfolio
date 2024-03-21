/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    daisyui: {
      themes: [],
    },
    extend: {
      backgroundImage: {
        'my-image': "url('../assets/bg-skill.jpg')",
        'contact': "url('./assets/bg-contact.jpg')",
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },


  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    
]

}

