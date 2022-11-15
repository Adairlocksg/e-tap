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
          neutral: "#454545",
          "base-100": "#F5F5F5",
          info: "#3ABFF8",
          success: "#79F564",
          warning: "#FBBD23",
          error: "#FF4F4F",
        },
        dark: {
          primary: "#477BFF",
          secondary: "#54F5CF",
          accent: "#37CDBE",
          neutral: "#454545",
          "base-100": "#F5F5F5",
          info: "#3ABFF8",
          success: "#79F564",
          warning: "#FBBD23",
          error: "#FF4F4F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
