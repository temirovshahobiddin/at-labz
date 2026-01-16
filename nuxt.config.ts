// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/fonts/fonts.css',
    '~/assets/main.css'
  ],
  tailwindcss: {},
  devtools: { enabled: true }
})
