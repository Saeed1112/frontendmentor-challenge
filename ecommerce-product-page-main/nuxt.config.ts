// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            htmlAttrs: {lang: 'en'},
            title: 'Frontend Mentor | E-commerce product page',
            link: [
                {
                    href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
                    rel: 'stylesheet'
                },
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}
            ]
        }
    }
})
