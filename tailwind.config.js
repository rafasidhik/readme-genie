/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        card: '#18181b',
        primary: '#3b82f6',
        border: '#27272a',
        textMain: '#f4f4f5',
        textMuted: '#a1a1aa'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
