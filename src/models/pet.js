const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  owner: String
});

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
