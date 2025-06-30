/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryHover: 'var(--color-primary-hover)',
        primaryDARK: 'var(--color-primaryDARK)',
        primary10: 'var(--color-primary-10)',
        secondary: 'var(--color-secondary)',
        secondary10: 'var(--color-secondary10)',
        accent: 'var(--color-accent)',
        accent10: 'var(--color-accent10)',
        background: 'var(--color-background)',
        textColor: 'var(--color-text)',
      },
    },
  },
  plugins: [],
};
