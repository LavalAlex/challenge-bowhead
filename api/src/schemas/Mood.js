const { Schema, model } = require("mongoose");

const schemaMood = new Schema({
  perfect: { type: Number, default: 0 },
  meh: { type: Number, default: 0 },
  bad: { type: Number, default: 0 },
});

module.exports = model("mood", schemaMood);
