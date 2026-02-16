let cart = []
//Click on add to cart button on iphone product
cart = [...cart,{name:"iphone",price:45000,qty:1}]
// console.log(cart)
//Click on add to cart button on speaker product
cart = [...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart)

const order = {
    email:"john@gmail.com",
    items:cart,
    orderValue:46000,
    status:"pending"
}
db.orders.insertOne(order)

//Create flipcart database
//create collection orders > email,items,orderValue,status,orderDate
//create collectin users > name,email,password,role
//Insert seed data
//Write aggregate query to display all the orders
//placed by a particular user

//use flipkart


db.orders.insertMany([
  {
    email: "amit@gmail.com",
    items: ["Laptop", "Mouse"],
    orderValue: 75000,
    status: "Delivered",
    orderDate: new Date("2026-02-01")
  },
  {
    email: "amit@gmail.com",
    items: ["Keyboard"],
    orderValue: 2500,
    status: "Shipped",
    orderDate: new Date("2026-02-05")
  },
  {
    email: "g@gmail.com",
    items: ["Mobile"],
    orderValue: 30000,
    status: "Processing",
    orderDate: new Date("2026-02-07")
  },
  {
    email: "s@gmail.com",
    items: ["Headphones"],
    orderValue: 2000,
    status: "Delivered",
    orderDate: new Date("2026-02-08")
  }
])

//Query

db.orders.aggregate([
  {
    $match: { email: "amit@gmail.com" }
  }
])


db.users.aggregate([
  {
    $match: { email: "amit@gmail.com" }
  },
  {
    $lookup: {
      from: "orders",
      localField: "email",
      foreignField: "email",
      as: "orders"
    }
  }
])


db.users.aggregate([
  {
    $match: { email: "amit@gmail.com" }
  },
  {
    $lookup: {
      from: "orders",
      localField: "email",
      foreignField: "email",
      as: "orders"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      "orders.items": 1,
      "orders.orderValue": 1,
      "orders.status": 1,
      "orders.orderDate": 1
    }
  }
])
