<template>
    <div>
        <div class="w-96 mx-auto" v-if="!pending">
            <div v-for="banner in home.result.topBanners" :key="banner.hbId">
                {{ banner.titleTxt }}
            </div>
        </div>
        <div v-else class="w-96 h-96 bg-coolgray-900">
        </div>
    </div>
</template>

<script setup>
// const { data: home } = await useAPI.callFetch('/v1/homes/list');

const homeStore = useHomeStore();
const { pending,data:home } = await useAPI.callLazyAsyncData('/v1/homes/list', 'home');

watch(home, (newHome) => {
    console.log(newHome.result) 
    homeStore.setHomeData(newHome.result);
})

onBeforeMount(() => {
    console.log('onBeforeMount')
});

onMounted(() => {
    console.log('onMounted')
});

onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
});

onUpdated(() => {
    console.log('onUpdated')
});

onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
});

onUnmounted(() => {
    console.log('onUnmounted')
});

</script>