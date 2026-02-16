const products = [
  {
    id: 1,
    name: "Product 1",
    desc: "This is description",
    price: 100,
    category: "Laptop",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "This is description",
    price: 120,
    category: "Desktop",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "This is description",
    price: 150,
    category: "Laptop",
  },
  {
    id: 4,
    name: "Product 4",
    desc: "This is description",
    price: 100,
    category: "Laptop",
  },
  {
    id: 5,
    name: "Product 5",
    desc: "This is description",
    price: 120,
    category: "Desktop",
  },
  {
    id: 6,
    name: "Product 6",
    desc: "This is description",
    price: 150,
    category: "Laptop",
  },
];
// let search="Laptop"
// const resultArray=products.map((product)=>product)
// console.log(resultArray)

let search="Laptop"
const resultArray=products.filter((product)=>product.category===search)
console.log(resultArray)
//map is used to create new array with new or modified value
// let search="Laptop"
// const resultArray=products.map((product)=>
//     {
//         return product
//     })
// console.log(resultArray)