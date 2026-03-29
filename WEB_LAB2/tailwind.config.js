/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                aquarium: {
                    teal: '#008080',
                    sidebarDark: '#111111',
                    coral: '#FF7F50',
                    bgLight: '#F3F4F6',
                    bgDark: '#737373',
                    cardDark: '#525252',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}