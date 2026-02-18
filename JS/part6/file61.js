// const emp1={
//     name:"John",
//     display:function(){
//         console.log(this.name)
//     }
// }
// const emp2={
//     name:"Cathy",
//     display:function(){
//         console.log(this.name)
//     }
// }
//emp1.display()
//emp2.display()

// function Employee(name){
//     this.name=name
//     this.display=()=>{
//         console.log(this.name)
//     }
// }
// const emp1=new Employee("John")
// const emp2=new Employee("Jack")
// emp1.display()
// emp2.display()


//prototype

function Employee(name){
    this.name=name
}
Employee.prototype.display=function (){
    console.log(this.name)
}
const emp1=new Employee("John")
const emp2=new Employee("Jack")
emp1.display()
emp2.display()

//earlier display was inside the employee
//herhe display is a part of prototype
//having access to this.name

