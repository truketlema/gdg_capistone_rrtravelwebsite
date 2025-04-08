/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#120B0B82',
        'banner-color': '#FFF',
        'star-color': '#F4BC61',
        'faded-color': '#878787',
        'package-description': '#555555',
      },
      fontSize: {
        '64': '64px',
        '60': '60px',
        '24': '24px',
        '18': '18px',
      },
      lineHeight: {
        '70': '70px',
        'full': '100%',
        '30': '30px',
      },
      textShadow: {
        'default': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '3px 3px 5px rgba(0, 0, 0, 0.5)',
      },
      spacing: {
        '67': '67px',
        '178': '178px',
        '14': '14px',
      },
    },
  },
  plugins: [],
}