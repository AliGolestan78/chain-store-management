const mongoose = require("mongoose");

const supplySchema = new mongoose.Schema({
  su_name: {
    type: String,
    minLength: [2, "A supplier name must have more or equal 2 characters"],
    maxLength: [255, "A supplier name must have less or equal 255 characters"],
    required: [true, "A supplier must have a name"],
    lowercase: true,
  },
  pr_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "A supplier must have supply a product"],
  },
  supr_date: {
    type: Date,
    default: Date.now(),
  },
  supr_num: {
    type: Number,
    required: [true, "A supply must have a number"],
  },
});

const SuPr_supply = mongoose.model("SuPr_supply", supplySchema);

// SuPr_supply.db.createCollection("Supplier", {
//   viewOn: "supr_supplies",
//   pipeline: [
//     {
//       $group: {
//         _id: "$su_name",
//       },
//     },
//   ],
// });

const SupplierView = mongoose.model("Supplier", {}, "Supplier");

module.exports = SuPr_supply;
