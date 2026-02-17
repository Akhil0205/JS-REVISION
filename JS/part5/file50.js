//other promise methods
//Promice.race,Promise.any,Promise.allSettled

//🧠 1. Promise.race()
// 📌 Meaning:

// Whichever promise finishes first wins (resolve OR reject)

// It does NOT wait for others.

//🧠 2. Promise.any()
// 📌 Meaning:

// First successful promise wins
// (rejections ignored unless ALL fail)

//🧠 3. Promise.allSettled()
// 📌 Meaning:

// Waits for ALL promises to finish
// Returns results of ALL (success + failure)

// Never rejects.


//p1,p2,p3
function p1()
{
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                resolve("P1 success")
            },5000)
            
        })

}
function p2()
{
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                //resolve("P2 success")
                reject("P2 failed")
            },1000)
            
            
        })

}
function p3()
{
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                resolve("P3 success")
            },2000)
            
        })

}
async function main()
{
    try{
    // const result=await Promise.all([p1(),p2(),p3()]);
    //  const result=await Promise.any([p1(),p2(),p3()]);
    // const result=await Promise.race([p1(),p2(),p3()]);
     const result=await Promise.allSettled([p1(),p2(),p3()]);

    console.log(result)
    }catch(e)
    {
        console.log(e)
    }
}
main()
//total 6 seconds 