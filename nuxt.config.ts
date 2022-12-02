// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app:{
        head:{
            title: "Nuxt Dojo", // for all pages
            meta:[
                {
                    name: "description",
                    content: "Everything about nuxt 3"
                }
            ],
            link:[
                {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
            ]
        }
    },
    runtimeConfig:{
        currencykey: process.env.CURRENCY_API_KEY
    }
    
})
