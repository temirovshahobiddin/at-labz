/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        gray: '#D9D9D9',
        white: '#FFF',
        blue: '#3831BF',
        'black-1d': '#1D1D1D',
        red: '#BF3131',
        pageBg: '#F0F0F0',
        gray2: '#E7EBEE',
      },

      backgroundImage: {
        sliderBg: 'linear-gradient(269deg, rgba(240, 240, 240, 0) 0%, #f0f0f0 100%)'
      },
    },
  },
  plugins: [],
}