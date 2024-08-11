/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "4.5rem",
                screens: {
                    DEFAULT: "89rem",
                },
            },
            boxShadow: {
                1: "1px 1px 20px 0px rgba(255,255,255,1)",
            },
        },
    },
    plugins: [],
};
