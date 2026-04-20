/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                aqua: {
                    teal: '#0A7065',
                    dark: '#111111',
                    coral: '#FF7D4A',
                    coralDark: '#E76F51',
                    bgLight: '#F3F4F6',
                    bgDark: '#737373',
                    cardDark: '#525252'
                }
            }
        },
    },
    plugins: [],
}