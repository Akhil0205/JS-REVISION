function user()
{
    let password="1234"
    function checkPassword(inputPassword){
        return password===inputPassword
    }
    return checkPassword
}
const result=user()
console.log(result("12345"))