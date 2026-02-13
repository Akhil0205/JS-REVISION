 function add(a,b)
{
    return a+b
}

function subtract(a,b)
{
    return a-b;
}


export const name="John"
//METHOD-2
// export default add;
// export { subtract };
//THEN import add, { subtract } from "./file.js";

export {add,subtract}