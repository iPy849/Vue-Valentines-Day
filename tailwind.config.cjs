/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    0: "#f7d4da",
                    200: "#e87d8f",
                    400: "#d92644",
                    600: "#821729",
                    800: "#2b080e"
                },
                light: {
                    0: "#fff",
                    200: "#d9dce5",
                    400: "#8e96b1",
                    600: "#4e5671",
                    800: "#1a1d26"
                },
                secondary: {
                    0: "#dce7ef",
                    200: "#95b6d0",
                    400: "#4f86b0",
                    600: "#2f506a",
                    800: "#101b23"
                },
                black: "#000"
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("@freeloop/tailwindcss-text-plugins")
    ],
}

