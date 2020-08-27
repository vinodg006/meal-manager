const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//Create Schema
const ItemSchema = new Schema({
  user: { type: ObjectId, ref: "user" },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  calories: Number,
});

module.exports = Item = mongoose.model("item", ItemSchema);
