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
                1: "10px 10px 30px 0px rgba(0,0,0,1)",
            },
            colors: {
                cream: {
                    1: "#F2E9E9",
                },
            },
            fontFamily: {
                inter: "inter",
                nast: "nast",
                antique: ["antique", "vazir"],
            },
        },
    },
    plugins: [],
};
