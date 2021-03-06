const mongoose = require("mongoose");

const emprcu_buySchema = new mongoose.Schema({
  em_id: {
    type: mongoose.Types.ObjectId,
    ref: "BranchEmployee",
    required: [true, "the id of branch empolyee is necessary"],
  },
  pr_list: [
    {
      number: {
        type: Number,
        default: 1,
      },
      pr_id: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: [true, "the id of product is necessary"],
      },
    },
  ],
  cu_id: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
    required: [true, "the id of customer is necessary"],
  },
  emprcu_date: {
    type: Date,
    default: Date.now(),
  },
});

emprcu_buySchema.pre(/^find/, function (next) {
  this.populate({
    path: "em_id",
    select: "em_name",
  }).populate({
    path: "pr_list.pr_id",
    select: "pr_name",
  });
  next();
});

const EmPrCu_Buy = mongoose.model("EmPrCu_Buy", emprcu_buySchema);

module.exports = EmPrCu_Buy;
