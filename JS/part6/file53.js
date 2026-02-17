//closure
//
function outer(){
    let n=1
    function inner(){
        return n++
    }
    return inner
}
//counter directly has no access to outer
//here we use inner function to access n
const counter=outer()
console.log(counter())
console.log(counter())
console.log(counter())
