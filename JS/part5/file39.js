//hoisting with var
// console.log(name)
// var name="John"
// var name
// console.log(name)
// name="John"

//hoisting with let and const
// console.log(name)
// let name="John"

//cannot access name before initialization
//TDZ = temporal dead zone


greet()
//function is fully hoisted so no error
function greet()
{
    console.log("Hello World")
}