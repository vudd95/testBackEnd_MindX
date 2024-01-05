import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  id: Number,
  item: String,
  price: Number,
  quantity: Number,
});

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;
