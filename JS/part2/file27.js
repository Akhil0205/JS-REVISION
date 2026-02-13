// let score=90
// if(score>50)
//     {
//         result="Pass"
//     }
// else
//     {
//         result="Fail"
//     }    
// console.log(result)    


// let score=90
// let result=score>50? "Pass":"Fail"    //ternary operator
// console.log(result)    

// let score=90
// let result=score> 50 && "Pass"  //we dont want the else part
// console.log(result)    

// let score=10
// let result=score || 30  //if score has no val res will be 30
// console.log(result)    

// let score = 81;

// switch (true) {
//   case (score <= 100 && score > 80):
//     console.log("Grade A");
//     break;

//   case (score <= 80 && score > 50):
//     console.log("Grade B");
//     break;

//   case (score <= 50 && score >= 20):
//     console.log("Grade C");
//     break;

//   default:
//     console.log("Failed");
// }

//switch check for both values and type by default
let subject="1"
switch(subject){
  case"1":
  {console.log("Hyper Text Markup Language");
   break;
  }
  case"2":
  {console.log("Cascading Style Sheets");
   break;
  }
  case"3":
  {console.log("Unknown");
   break;
  }
}