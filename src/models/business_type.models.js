const mongoose = require("mongoose");

const businessTypeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

businessTypeSchema.virtual("businesses", {
  ref: "Business",
  localField: "_id",
  foreignField: "type_id",
});

const BusinessType = mongoose.model("BusinessType", businessTypeSchema);

module.exports = BusinessType;
