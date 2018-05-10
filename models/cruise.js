const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CruiseSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  price: { 
    type: String, 
    required: true 
  },
  date: { 
    type: String,
    required: true
  }
});

const Cruise = mongoose.model("Cruise", CruiseSchema);

module.exports = Cruise;