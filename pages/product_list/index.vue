<template>
    <div>
        <justified-infinite-grid
            class="container"
            :gap="20"
            :rowRange="5"
            @request-append="onRequestAppend"
        >
            <div v-for="prod in data.result.prodList" :key="prod.prodId">
                <FeatureProduct
                :Product="prod"
                ></FeatureProduct>
            </div>
        </justified-infinite-grid>
    </div>
</template>

<script setup>

const { data:data } = await useAPI.callFetch('/v1/prods', {
    params:{
        offset:0,
        limit:30,
        sub_brand:'',
        cat:200000,
        grade:'',
        pr:'0r1000000',
        order:'de'
    }
});

function onRequestAppend(e) {
}

</script>
