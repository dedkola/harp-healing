/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Default body font: Open Sans
                sans: ["var(--font-open-sans)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
                // Lato for titles/headings when needed
                lato: ["var(--font-lato)", "sans-serif"],
                // EB Garamond for quotes
                quote: ["var(--font-eb-garamond)", "serif"],
                // Raleway for buttons/CTAs
                button: ["var(--font-raleway)", "sans-serif"],
            },
        },
    },
    plugins: [],
}

