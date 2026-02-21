/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    dark: '#05010d', // Deep violet-black
                    glass: 'rgba(139, 92, 246, 0.05)', // Violet tinted glass
                },
                violet: {
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    glow: '#bc9aff',
                },
                purple: {
                    DEFAULT: '#7c3aed',
                    glow: '#a78bfa',
                },
                // Keeping these for gradients but shifting towards violet/blue
                cyan: {
                    DEFAULT: '#a78bfa', // Muted to violet-ish
                    glow: '#c4b5fd',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                rajdhani: ['Rajdhani', 'sans-serif'],
            },
            boxShadow: {
                'neon-cyan': '0 0 10px #4cc9f0, 0 0 20px #4cc9f0',
                'neon-purple': '0 0 10px #7b2cbf, 0 0 20px #7b2cbf',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
