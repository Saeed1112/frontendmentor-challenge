/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'c-orange': '#ff7d1a',
                'pale-orange': '#ffede0',
                'very-dark-blue': '#1d2025',
                'dark-grayish-blue': '#68707d',
                'grayish-blue': '#b6bcc8',
                'light-grayish-blue': '#f7f8fd',
            },
            fontSize: {
                body: '16px'
            }
        },
        fontFamily: {
            'kumbh-sans': ['Kumbh Sans', 'sans-serif']
        }
    },
    plugins: [],
}
