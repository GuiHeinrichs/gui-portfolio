import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A5DF8",
      },
      boxShadow: {
        grid: "0px 4px 10px 0px rgba(0, 0, 0, 0.05);"
      },
      fontFamily: {
        sans: ["var(--font-sfpro)"],
      }
    }
  },
  plugins: [require("@tailwindcss/container-queries")],
}
export default config
