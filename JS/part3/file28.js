const names=["John","Cathy","Amy"]
const score=[56,78,90]

names.forEach((name,index)=>
    {
        console.log(name,score[index])
    })
//with help of index only we are able to print
    
// console.log(names)
//names.forEach((name,index,a)=>{console.log(a)})
//here a prints the entire array

//names.forEach((a,b,c)=>{console.log(b)})
//a is value of array
// b is index

//names.forEach((name,index,arr)=>{console.log(arr[index])})
//here arr[index] === name
// or names.forEach(name => console.log(name))

