// const student={
//     name:"John",
//     age:21
// }
// console.log(student)
// const result=JSON.stringify(student)
// console.log(result)

const student='{"name":"John","age":21}'
//this becomes string now , cant access
//we need to parse it for access
const result=JSON.parse(student)
console.log(result)
//it results object now
