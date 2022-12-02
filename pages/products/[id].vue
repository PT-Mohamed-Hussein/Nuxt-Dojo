<script setup>

    definePageMeta({
        layout: 'products'
    })

    const { id } = useRoute().params;
    
    const uri = "https://fakestoreapi.com/products/" + id

    const { data: product } = await useFetch(uri, {key: id}) //default behaviour is to fetch once for every component so we have to give it a key that is unique for each product to get each product alone


    if(!product.value){
        throw createError({statusCode: 404, statusMessage: "Product Not Found!", fatal: true})
    }

</script>

<template>
    <div>
        <!-- another way to override the general tags in the nuxt config -->
        <Head> 
            <Title> Nuxt Dojo | {{product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <ProductDetails :product="product"></ProductDetails>
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