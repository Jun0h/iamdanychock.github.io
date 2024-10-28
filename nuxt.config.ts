// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,  
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },

  app: {
    baseURL: '/jun0h.itch.io/', // Remplacez `nom-du-repo` par le nom de votre dépôt GitHub
  },
})
