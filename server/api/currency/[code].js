export default defineEventHandler(async (event)=>{ // event is the req 
    //query
    const { code } = event.context.params;

    const { currencykey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencykey}`

    const { data } = await $fetch(uri)

    return data
})