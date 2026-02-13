// function add(a,b)
// {
//     console.log(a)
//     console.log(b)
// }
// add(5,10)


// function add(a,b)
// {
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0])
// }
// add(5,10,5,10)
//here we can pass as many arguments we want


// function adde(a,b)
// {
//     return a+b
// }
// const result=adde(5,7)
// console.log(result)



// function add(...arr) //rest operator
// {

//     let sum=arr.reduce((sum,num)=>sum+num,0)
//     return sum
// }
//we have to return sum here
// const result=add(7,5,8,9)
// console.log(result)


//in arrow function only rest operator works
const add=(...args)=>
    {
        //console.log(args)
        let sum=args.reduce((total,num)=>total+num,0)
        return sum
    }
const result=add(7,5,8,9)
console.log(result)     