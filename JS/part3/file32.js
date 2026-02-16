const numbers=[10,20,30,40,50]
// let n1=numbers[0]
// let n2=numbers[1]
// console.log(n1)
// console.log(n2)

//ECMAScript

// const[n1,n2]=numbers
// console.log(n1)
// console.log(n2)
//destructuring

//rest operator
// const[n1,n2,...n3]=numbers
// console.log(n1)
// console.log(n2)
// console.log(n3)
//here n3 becomes an array of remaining elements

//skip values
// const[n1,,n2]=numbers
// console.log(n1)
// console.log(n2)

// const[n1,n2,n3=10]=[12,15,20]
// console.log(n1)
// console.log(n2)
// console.log(n3)

//default value
const[n1,n2,n3=10]=[12,15]
console.log(n1)
console.log(n2)
console.log(n3)
//here n3 shows undefined if default not initialised