const mongoose = require('mongoose');

const ListItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  items: [ListItemSchema]
});

const List = mongoose.model('List', ListSchema);

module.exports = List;