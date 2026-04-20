export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                aqua: {
                    teal: '#0A7065', // Existing highlight color
                    dark: '#111111', // Dark sidebar bg
                    coral: '#FF7D4A', // Range/button color
                    coralDark: '#E76F51',
                    cardDark: '#525252' // Dark card bg
                }
            }
        },
    },
    plugins: [],
}