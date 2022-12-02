export default defineEventHandler(async (event)=>{ // event is the req 
    //query
    const { name } = getQuery(event);

    //body data
    const{ age } = await readBody(event)

    //api call with private key 

    const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=69t2AZ2Ob4zb3BqiZvo2NeixgyPQ070IBrwYlDJJ")

    // return {
    //     message: `Hello ${name}! Your Are ${age} Years Old`
    // }

    return data
})