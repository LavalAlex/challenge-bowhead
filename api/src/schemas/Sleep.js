const { Schema, model } = require("mongoose");

const schemaSleep = new Schema({
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

module.exports = model("sleep", schemaSleep);
