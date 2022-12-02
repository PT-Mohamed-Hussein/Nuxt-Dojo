<script setup>
    // const { product } = defineProps(['product']) == the next line
    defineProps(['product'])
</script>

<template>
    <div class="card text-center">
        <img :src="product.image" alt="Product Image" class="thumb">
        <p class="font-bold text-grey-500 m-4 truncate">{{product.title}}</p>
        <NuxtLink :to="`products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<style scoped>
    .thumb{
        height: 120px;
        max-width: 90%;
        object-fit: cover;
        margin: 0 auto
    }
</style>