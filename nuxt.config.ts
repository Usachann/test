export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Наша компания",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
    },
  },
  css: ["~/assets/css/main.css"],
});
