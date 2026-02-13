numbers=[5,3,6,1,3]
numbers.forEach((number) => 
    {console.log(number)});
//

numbers.map(() => {});
//transform and create new array with same or modified value with same number of elements
const newArray=numbers.map((number)=>
    {return number+1})
console.log(newArray)


numbers.filter(() => {});
//filter out some elements as per conditions
//output will be array with filtered values
const filterArr=numbers.filter((number)=>
    {   
        
        return number > 3
    })
console.log(filterArr)

const evenNums=numbers.filter((number)=>
    {
        return number%2===0
    })
console.log(evenNums)    

numbers.find(() => {});
//returns one item only

const result=numbers.find((number)=>
    {
        //return number===3
        return number>3
    })
console.log(result)    

numbers.reduce((sum,number) => {},0);
//we pass 2 arguments always
const res=numbers.reduce((sum,number)=>
    {
        return sum+number
    },0)
console.log(res)    

//numbers.some(()=>{})
    //returns true or false even 1 matches the condition

const some=numbers.some((number)=>
    {return number>1})    
console.log(some)


//SAMPLE
let marks=[78,50,90,20]
//if marks>80 in one subject -> pass

let resulte=marks.some((mark)=>
    {
        return mark>50
    })
if(resulte) console.log("Pass")   
else console.log("Fail")     
//console.log(pass)

//EVERY
//numbers.every(()=>{})
const check=numbers.every((mark)=>
    {
        return mark>50
    })
if(check) console.log("Pass")    
else console.log("Fail")

//SAMPLE
