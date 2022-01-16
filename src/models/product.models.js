const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  branch_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Branch",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

productSchema.virtual("productquantities", {
  ref: "ProductQuantity",
  localField: "_id",
  foreignField: "product_id",
});

const Product = mongoose.Model("Product", productSchema);

module.exports = Product;
