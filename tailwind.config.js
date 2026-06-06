/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        card: 'var(--color-card)',
        primary: 'var(--color-primary)',
        border: 'var(--color-border)',
        textMain: 'var(--color-text-main)',
        textMuted: 'var(--color-text-muted)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
