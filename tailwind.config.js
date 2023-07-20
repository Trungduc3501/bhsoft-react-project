/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        // screens: {
        //     xl: { 'max': '800px' },
        //     // => @media (max-width: 1279px) { ... }
        // },
        extend: {
            colors: {
                primary: "#FF64AE",
                subPrimary: "#091156",
                desc: "#8B8B8B",
                slogan: "rgba(var(--color-slogan), 0.6)",
            },
        },
    },
    plugins: [],
};
