module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        plumbtion: {
          "primary": "#FF5316",
          "secondary": "#F3A71C",
          "accent": "#07499B",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#C41919",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
