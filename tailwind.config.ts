import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      backgroundOpacity: {
      '50': '0.5',
    },},
  },
  plugins: [require('@tailwindcss/scrollbar-hide')],
};

export default config;
