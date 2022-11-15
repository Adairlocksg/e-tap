/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#477BFF",
          secondary: "#54F5CF",
          accent: "#37CDBE",
          neutral: "#477BFF",
          "base-100": "#F5F5F5",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
