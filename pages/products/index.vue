<script setup>
    definePageMeta({
        layout: 'products'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products'); //here we got an object called data which the response throw it back by default and we will use it as variable called products thats what { data: products } means

    useHead({ // this way to override the general ones in the nuxt.config
        title: "Nuxt Dojo | Merch",
        meta:[
            {
                name: "description",
                content: "Nuxt 3 Merch"
            }
        ]
    })
</script>   

<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p">
                <ProductCard :product="p"></ProductCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px
    }
    p{
        margin: 20px 0
    }
</style>