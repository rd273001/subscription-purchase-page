/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-gray-100': '#E5E7EB',
        'custom-blue': '#146EB4',
        'custom-black': '#1A181E',
        'custom-gray-500': '#808080',
        'custom-gray-700': '#4D4D4D',
        'custom-gray-300': '#D9D9D9',
      },
    },
  },
  plugins: [],
}