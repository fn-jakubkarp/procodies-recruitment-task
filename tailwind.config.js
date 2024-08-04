/** @type {import('tailwindcss').Config} */

const config = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto'],
            },
            colors: {
                primary: '#293632',
                secondary: '#F5F5F5',
                header: '#2D473E',
                accent: '#006340',
            },
        },
    },
};

export default config;
