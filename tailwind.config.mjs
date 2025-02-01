import withPurgeCss from 'next-purgecss';

export default withPurgeCss({
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: '#1a1c1b',
        secondary: '#145954',
        smallest: '#4c4f4e',
        bgPrimary: '#faf9f7',
        bgSecondary: '#f3f3f1',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
});
