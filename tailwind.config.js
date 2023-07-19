/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
            alpha: "#16233b",
            beta: "#F7F6F3",
            delta: "#ba6040",
            gamma: "#bfd996",
            accent: "#d1b852",
            epsilon: "#d6e7bc",
            zeta: "#c9e4ee",
            card: "#d1b852",
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
    plugins: []
};