import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-dark': '#171717',
        'c-orange': '#FD853A',
        'c-orange-light': '#FEB273',
        'c-orange-dark': '#FB6514',
        'c-text': '#344054',
        'c-text-light': '#98A2B3',
        'c-purple': '#7F56D9',
        'c-footer': '#272727',
        'c-card': '#3C3C3C',
      },
      fontFamily: {
        display: ['Urbanist', 'var(--font-display)', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'var(--font-body)', 'sans-serif'],
        urban: ['Urbanist', 'var(--font-urban)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
