const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: Buffer,
    },
    gstin: {
      type: String,
      required: true,
    },
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Owner",
    },
    type_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "BusinessType",
    },
  },
  {
    timestamps: true,
  }
);

businessSchema.virtual("branches", {
  ref: "Branch",
  localField: "_id",
  foreignField: "business_id",
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
