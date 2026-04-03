/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#11aaa6',
        'primary-dark': '#0d8f8b',
        secondary: '#ff610b',
        'secondary-dark': '#e05200',
        dark: '#1F1F1F',
        navy: '#1d1b4c',
        'gray-soft': '#f5f5f5',
      },
      fontFamily: {
        heading: ['var(--font-catamaran)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}
