const mongoose  = require('mongoose');

// define a schema for the user collection
const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });
  
  // create a model based on the schema
  const Group = mongoose.model('Group', groupSchema); 

  module.exports = Group;