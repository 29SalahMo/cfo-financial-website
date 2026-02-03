import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B2545',
          DEFAULT: '#134074',
          light: '#8DA9C4',
          accent: '#F4A259',
          muted: '#C4D7E0'
        }
      }
    }
  },
  plugins: []
};

export default config;
