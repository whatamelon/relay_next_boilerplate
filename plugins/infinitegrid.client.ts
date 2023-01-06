import { JustifiedInfiniteGrid } from "@egjs/vue3-infinitegrid";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("JustifiedInfiniteGrid", JustifiedInfiniteGrid);
})