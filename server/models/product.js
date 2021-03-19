const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      unique: 1,
      maxlength: 100,
    },
    description: {
      required: true,
      type: String,
      maxlength: 10000,
    },
    price: {
      required: true,
      type: Number,
      maxlength: 255,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand", // go to this database to this model and find id or name of this object ID
      required: true,
    },
    shipping: {
      requried: true,
      type: Boolean,
    },
    available: {
      requried: true,
      type: Boolean,
    },
    wood: {
      type: Schema.Types.ObjectId,
      ref: "Wood",
      required: true,
    },
    frets: {
      requried: true,
      type: Number,
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    publish: {
      requried: true,
      type: Boolean,
    },
    images: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
