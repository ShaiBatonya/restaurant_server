const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clients_schema = new Schema({

  client_name:{
    type:String,
    required: true,
    unique: true
},

client_email:{
    type:String,
    unique: true,
    lowercase: true,
    required: true
},
});

module.exports = mongoose.model("clients", clients_schema);
