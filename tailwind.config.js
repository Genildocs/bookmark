/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // ### Primary
        Soft_Blue: 'hsl(231, 69%, 60%)',
        Soft_Red: 'hsl(0, 94%, 66%)',
        // ### Neutral
        Grayish_Blue: 'hsl(229, 8%, 60%)',
        Very_Dark_Blue: 'hsl(229, 31%, 21%)',
      },

      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },

      gridTemplateColumns: {
        S: 'repeat(1, minmax(2rem, 1fr))',
      },
    },
  },
  plugins: [],
};
