module.exports = {
   mode: 'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            rw: 'Raleway'
         },
         colors: {
            background: '#373E40',
            foreground: '#77878B',
            brand: {
               DEFAULT: '#18F2B2',
               dark: '#4FB286',
               light: '#50FFB1'
            }
         }
      }
   },
   variants: {
      extend: {}
   },
   plugins: [require('tailwind-scrollbar-hide')]
};
