const api="https://jsonplaceholder.typicode.com/users"
async function fetchData()
{
    const response=await fetch(api)
    //here await fetch returns promise by default(resolve,reject)
    const result=response.json()
    console.log(result)

}
fetchData()