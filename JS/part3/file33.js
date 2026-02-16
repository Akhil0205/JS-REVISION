const student=
{
    name:"John",
    age:21
}
//without destructuring
// console.log(student.name)
// console.log(student.age)


//destructuring
// names=["John","Cathy","Mike"]
// const[name1,name2]=names
// console.log(name1)
// console.log(name2)

// const {name,age}=student
// console.log(name)
// console.log(age)

const {n1,n2}=student
console.log(n1)
console.log(n2)

//here we must use the same property name so it doesnt return undefined
