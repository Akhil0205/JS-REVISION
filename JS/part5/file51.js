const api="https://jsonplaceholder.typicode.com/users"
async function fetchData()
{
    const result=await fetch(api)
    //here await fetch returns promise by default(resolve,reject)
    console.log(result)

}
fetchData()