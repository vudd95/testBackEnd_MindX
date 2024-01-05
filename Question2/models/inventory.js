import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  id: Number,
  sku: String,
  description: String,
  instock: Number,
});

const InventoryModel = mongoose.model("Inventory", inventorySchema);

export default InventoryModel;
