const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const events_schema = new Schema(
  {
    event_date: {
      type: String,
      require: true,
    },
    event_clients_quantity: {
      type: Number,
      require: true,
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "clients",
      required: true,
    },
    workers: [
      {
        worker: {
          type: mongoose.Types.ObjectId,
          ref: "workers",
          required: true,
        },
      },
    ],
    dishes: [
      {
        dishe: {
          type: mongoose.Types.ObjectId,
          ref: "dishes",
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("events", events_schema);
