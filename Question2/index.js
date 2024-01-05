import express from "express";
import OrderModel from "./models/order.js";
import InventoryModel from "./models/inventory.js";
import UserModel from "./models/users.js";
import connectDB from "./db.js";

const app = express();
app.use(express.json());

const order = [
  { id: 1, item: "almonds", price: 12, quantity: 2 },
  { id: 2, item: "pecans", price: 20, quantity: 1 },
  { id: 3, item: "pecans", price: 20, quantity: 3 },
];

const inventory = [
  { id: 1, sku: "almonds", description: "product 1", instock: 120 },
  { id: 2, sku: "bread", description: "product 2", instock: 80 },
  { id: 3, sku: "cashews", description: "product 3", instock: 60 },
  { id: 4, sku: "pecans", description: "product 4", instock: 70 },
];

const user = [
  { username: "admin", password: "MindX@2022" },
  { username: "alice", password: "MindX@2022" },
];

const data = async () => {
  await OrderModel.insertMany(order);
  await InventoryModel.insertMany(inventory);
  await UserModel.insertMany(user);
};

app.get("/getInventory", async (req, res) => {
  const inventoryList = await InventoryModel.find();
  res.status(201).send({
    message: "Thành công !",
    data: inventory,
  });
});

app.listen(3001, async () => {
  console.log("App is running at 3001");
  await connectDB();
  await data();
});
