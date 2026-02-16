// function response(user)
// {
//     //console.table(user)
//     console.log(user.name)
//     console.log(user.email)
//     console.log(user.role)
// }
// const user=
// {
//     name:"John",
//     email:"john@gmail.com",
//     role:"user"
// }
// response(user)
//we are calling function and passing entire object here

//destructuring
function response({name,email,role})
{
    //console.table(user)
    console.log(name)
    console.log(email)
    console.log(role)
}
const user=
{
    name:"John",
    email:"john@gmail.com",
    role:"user"
}
response(user)