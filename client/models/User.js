const mongoose  = require('mongoose');

// define a schema for the user collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },     
    password: {
        type: String,
        required: true
    }
    // figure out how to work around there being no image schema type 
  });
  
  // create a model based on the schema
  const User = mongoose.model('User', userSchema); 

  module.exports = User;

  // Connect to MongoDB
// mongoose.connect('mongodb+srv://CoShopUser:6TvlGsCx9PGmwpNl@coshopcluster.iyjalfb.mongodb.net/CoShopDB?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
  
//   // Create a new User document and save it to the database
//   const newUser = new User({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     password: 'mypassword'
//   });
  
//   newUser.save()
//     .then(savedUser => {
//       console.log('User document saved successfully:', savedUser);
//       // Close the MongoDB connection
//       mongoose.connection.close();
//     })
//     .catch(error => {
//       console.error('Error saving User document:', error);
//       // Close the MongoDB connection
//       mongoose.connection.close();
//     });


