const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  description: String,
  cost: Number,
  quantity: Number
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
