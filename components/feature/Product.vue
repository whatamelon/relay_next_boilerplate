<template>
    <div class="w-full">
        <div class="aspect-w-2 aspect-h-3">
            <img
            :src="Product.imgLink"
            class="w-full h-full object-center object-cover"
            />
        </div>
        <p>{{ Product.name }}</p>
        <!-- <p>{{ Product.priceLow }}</p>
        <p>{{ Product.prodCnt }}</p>
        <p>{{ Product.brandSubName }}</p> -->

    </div>
</template>

<script setup>

const props = defineProps(['Product']);

</script>