import {resolve} from "path"
export default defineNuxtConfig ({
  alias: {
    "@": resolve(__dirname, "/")
  },
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})