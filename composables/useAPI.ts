export default {
    callFetch (url: string, options: any) {
        return useFetch(url, {
            ...options,
            baseURL:'https://rdev.the-relay.kr',
            headers:{
                BrandDomain:'kolon',
            },

            async onRequest({ request, options }) {
                console.log('[fetch request]')
            },
            async onRequestError({ request, options, error }) {
                console.log('[fetch request error]')
            },
            async onResponse({ request, response, options }) {
                console.log('[fetch response]')
                console.log(response)
            },
            async onResponseError({ request, response, options }) {
                console.log('[fetch response error]')
            },
        })
    },

    callLazyAsyncData (url: string,name:string, options: any) {
        return useLazyAsyncData(name, () =>$fetch(url, {
            ...options,
            baseURL:'https://rdev.the-relay.kr',
            headers:{
                BrandDomain:'kolon'
            },

            async onRequest({ request, options }) {
                console.log('[fetch request]')
            },
            async onRequestError({ request, options, error }) {
                console.log('[fetch request error]')
            },
            async onResponse({ request, response, options }) {
                console.log('[fetch response]')
                console.log(response)
            },
            async onResponseError({ request, response, options }) {
                console.log('[fetch response error]')
            },
          }
        ))
    },
}