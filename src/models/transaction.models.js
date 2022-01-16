const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    amount: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

transactionSchema.virtual("productquantities", {
  ref: "ProductQuantity",
  localField: "_id",
  foreignField: "transaction_id",
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
