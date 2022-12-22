<template>
    <div class="w-96 mx-auto" v-if="!pending">
        <div v-for="banner in home.result.topBanners" :key="banner.hbId">
            {{ banner.titleTxt }}
        </div>
    </div>
    <div v-else class="w-96 h-96 bg-coolgray-900">
    </div>
</template>

<script setup>
// const { data: home } = await useFetch('https://rdev.the-relay.kr/v1/homes/list', {
//     headers:{
//         BrandDomain:'kolon'
//     }
// });

const { pending,data:home } = await useLazyAsyncData('home', () => $fetch('https://rdev.the-relay.kr/v1/homes/list', {
    headers:{
        BrandDomain:'kolon'
    }
}));

watch(home, (newHome) => {
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})

</script>