const path = require('path');

export default {

    mode: 'universal',

    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    loading: {
        color: '#fff'
    },


    css: [
        {
            src: '~/assets/scss/tailwind.scss',
            lang: 'scss'
        }
    ],

    router: {
        middleware: 'i18n'
    },

    plugins: [
        '~/plugins/i18n.js',
    ],

    build: {
        postcss: {
            plugins: {
                tailwindcss: path.resolve(__dirname, './tailwind.config.js')
            }
        }
    }
}
