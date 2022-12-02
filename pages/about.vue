<script setup>
    const { data } = await useFetch('/api/serverroute')
    const { data2 } = await useFetch('/api/currency/GBP')
    // const { data } = await useFetch('/api/serverroute?name=Mohamed', {method: "POST", body:{ age: 30}})

</script>

<template>
    <div>    
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minima, modi iste cum soluta rem eligendi quam aliquam itaque veritatis tempora corrupti sint, labore tenetur officiis quis inventore obcaecati fuga?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minima, modi iste cum soluta rem eligendi quam aliquam itaque veritatis tempora corrupti sint, labore tenetur officiis quis inventore obcaecati fuga?</p>
        <div>{{data}}</div>
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