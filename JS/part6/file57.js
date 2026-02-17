// const employees=["John","Cathy","Mike"]
// for(let e of employees){
//     console.log(e)
// }

const student=
{
    name:"John",
    age:21
}
// for(let s of student){
//     console.log(s)
// }

//of is used for arrays only


for(let s of Object.keys(student))
//returns keys
//CONVERTS TO ARRAY 
    {
        console.log(s)
    }
