const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/restaurant");

    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
