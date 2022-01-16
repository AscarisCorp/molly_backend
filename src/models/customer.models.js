const mongoose = require("mongoose");
const validator = require("validator");

const customerSchema = new Mongoose.Schema(
  {
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    gstin: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

customerSchema.virtual("transactions", {
  ref: "Transaction",
  localField: "_id",
  foreignField: "customer_id",
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
