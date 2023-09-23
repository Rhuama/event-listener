import type { Config } from 'tailwindcss'

export const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121214',
        secondary: '#202024', //textos cinza escuro
        tertiary: "#fa7605",
        quaternary:'#ffffff',
        quinary:'#96969e', //textos cinza claro
        sixnary:'#e1e1e6', //barras
      }
    },
  },
  plugins: [],
}
export default config
