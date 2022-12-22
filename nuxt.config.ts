export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-8',
        title: 'Relay',
        meta: [
          { name: 'description', content: 'relay' }
        ],
        link:[
          {
            href:'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
            rel:'stylesheet'
          },
        ]
      }
    },
    imports: {
      dirs: [
        'store',
        // 'composables/*/*.{ts,js,mjs,mts}',
      ],
    },
    css: [
      '~/assets/css/main.css',
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: [
        ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    ],
    alias: {
        pinia: process.env.NODE_ENV === 'production' ? '/node_modules/pinia/dist/pinia.mjs' : '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },
    build: { 
      transpile: [
        '@headlessui/vue',
        '@headlessui/tailwindcss'
      ] 
    }
})