// //promises
// function f1()
// {
// setTimeout(()=>{console.log("This is f1 function")},1000)
// }
// //we have delayed f1 using setTimeout
// function f2()
// {
//     console.log("This is f2 function")
// }
// f1()
// f2()
//synchronous(at the same time)



//now if we want to run f2 after f1

function makePayment()
{
setTimeout(()=>{console.log("Payment has been processed")},5000)
}
function sendConfirmation()
{
    console.log("Order has been placed successfully")
}
makePayment()
sendConfirmation()