// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app : {
    head: {
      title: 'Marvel Heroes!',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
});
