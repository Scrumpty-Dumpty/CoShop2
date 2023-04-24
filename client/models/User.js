const mongoose = require("mongoose");

// define a schema for the user collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // figure out how to work around there being no image schema type
});

// create a model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
