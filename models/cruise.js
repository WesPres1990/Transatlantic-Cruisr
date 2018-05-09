const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cruiseSchema = new Schema({
  price: { 
      type: String, 
      required: true 
    },
  date: { 
      type: String,
      required: true
    }
});

const Cruise = mongoose.model("Cruise", cruiseSchema);

module.exports = Cruise;