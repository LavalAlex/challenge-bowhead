const { Schema, model } = require("mongoose");

let counter = 1;
let CountedId = { type: Number, default: () => counter++ };

const schemaAdmin = new Schema({
  id: CountedId,
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model("admin", schemaAdmin);
