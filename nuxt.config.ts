export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', 'nuxt-gtag'],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  app: {
    baseURL: '/iamdanychock.github.io/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head : {

    title: 'Dany Portfolio',
      link : [
        { rel: 'icon', type: 'image/png', href: 'apple-touch-icon.png' },]
    }
  },
  gtag: {
    id: 'G-DQFM4HPQW5', // Remplace par ton ID de suivi GA4
  },
  
})