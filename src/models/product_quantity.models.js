const mongoose = require("mongoose");

const productQuantitySchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  transaction_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Transaction",
  },
  quantity: {
    type: String,
    required: true,
  },
});

const ProductQuantity = mongoose.model(
  "ProductQuantity",
  productQuantitySchema
);

module.exports = ProductQuantity;
