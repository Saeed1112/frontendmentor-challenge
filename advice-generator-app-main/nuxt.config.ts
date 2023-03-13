// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title:'Frontend Mentor | Advice generator app',
            link: [
                {
                    href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
                    rel: 'stylesheet'
                },
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}
            ]
        }
    }
})
