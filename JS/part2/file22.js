import products from "./data.js";
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
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return total;
}
function placeOrder() {
  if (cart.length === 0) {
    console.log("Cart is empty");
    return;
  }

  const total = calculateTotal();

  const order = {
    email: userEmail,
    items: cart,
    orderValue: total,
    // totalValue: productTotal,
  };

  console.log(`Order placed successfully by ${order.email}`);

  order.items.forEach((item) => {
    console.log(
      `${item.id}-${item.name}-${item.desc}-${item.quantity}-${item.price}-${item.price * item.quantity}`,
    );
  });

  // console.log("product total", productTotal);

  console.log("Total order value", total);
}

//console.log(products)
console.log("***Flipkart***");
products.forEach((product) => {
  // console.log(product.id, product.name, product.desc, product.price);
  console.log(`${product.id}-${product.name}-${product.desc}-${product.price}`);
});

console.log("--------------------------");
addToCart(1);
addToCart(3);
addToCart(5);
// console.log(cart);
increment(1);
increment(5);
// console.log(cart);
decrement(1);
// console.log(cart);
placeOrder();