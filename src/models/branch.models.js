const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Business",
    },
  },
  {
    timestamps: true,
  }
);

branchSchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "branch_id",
});

const Branch = mongoose.Model("Branch", branchSchema);

module.exports = Branch;
