const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workers_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("workers", workers_schema);
