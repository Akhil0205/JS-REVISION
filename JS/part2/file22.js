
// const products = [
//   { id: 1, name: "Product 1", desc: "This is description", price: 100, category: "Laptop" },
//   { id: 2, name: "Product 2", desc: "This is description", price: 120, category: "Desktop" },
//   { id: 3, name: "Product 3", desc: "This is description", price: 150, category: "Laptop" },
//   { id: 4, name: "Product 4", desc: "This is description", price: 100, category: "Laptop" },
//   { id: 5, name: "Product 5", desc: "This is description", price: 120, category: "Desktop" },
//   { id: 6, name: "Product 6", desc: "This is description", price: 150, category: "Laptop" },
// ];

// const cart = [];

// // function addToCart(id) {
// //   const product=products.find((item)=>item.id===id)
// //   if (product) {
// //     cart.push(product);
// //   }
// // }

// function addToCart(productId) {
//   const product=products.find((product)=>product.id===productId)
// //   if (product) {
//     cart.push({...product,quantity:1}); //adds quantity using spread operator
// //   }

// //console.log(product)
// // here this product prints the object itself
// }
 
// function increment(productId)
// {
//     const Item=cart.find((item)=>item.id===productId)
//     Item.quantity+=1
// }
// function decrement(productId)
// {
//     const Item=cart.find((item)=>item.id===productId)
//     Item.quantity-=1
// }
// addToCart(1);
// addToCart(3);
// addToCart(5);
// console.log(cart);
// increment(1)
// increment(5)
// console.log(cart)
// decrement(1)
// console.log(cart)
// decrement(1)
// console.log(cart)
// placeOrder(3)
// // function placeOrder(productId)
// // {
// //     const index=cart.findIndex((item)=>item.id===productId)
// //     const order=cart[index]
// //     cart.splice(index,1)
// //     console.log(order)
// // }
// function placeOrder()
// {
//     if(cart.length===0)
//         {
//             console.log("Cart is empty")
//         }
// }

// const order()
// {
//     email:"john@gmail.com",
//     items:cart,
//     orderValue:total
// }
// console.log("Order placed successfully")
// console.log(first)

//sir repo
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
const cart = [];
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  cart.push({ ...product, quantity: 1 });
}
function increment(productId) {
  const item = cart.find((product) => product.id === productId);
  item.quantity++;
}
function decrement(productId) {
  const item = cart.find((product) => product.id === productId);
  item.quantity--;
}
const userEmail = "john@gmail.com";
function calculateTotal() {
  let total = 0;
  for(let item of cart) {
    productTotal = item.price * item.quantity;
    total += item.price * item.quantity;
  }
  return total;
}
function placeOrder(){
  if(cart.length === 0) {
    console.log("Cart is empty");
    return;
  }
  const total = calculateTotal();

  const order = {
    email: userEmail,
    items: cart, 
    orderValue: total,
    totalValue: productTotal
  };
  console.log("Order placed successfully");
  console.log(order);
  console.log("product total", productTotal)
  console.log("Total order value", total);
}
addToCart(1);
addToCart(3);
addToCart(5);
// console.log(cart);
increment(1);
increment(5);
// console.log(cart);
decrement(1);
// console.log(cart);
decrement(1);
// console.log(cart);
placeOrder();


// now we want in the format
