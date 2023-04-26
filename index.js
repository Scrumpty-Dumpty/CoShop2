const express = require("express");
const app = express();
// const path = require("path");
// const User = require("./client/models/User");
// const { connectToDB } = require('./dbConnection');

app.use(express.static(__dirname + "/client"));
// app.use(express.json());

const port = process.env.PORT || 3000;
app.get("/test", function (request, response) {
  response.type("text/plain");
  response.send("Node.js and Express running on port=" + port);
});

app.listen(port, function () {
  console.log("Server is running at http://localhost:3000/");
});

// place this code before starting the server:

// // ROUTE TO HANDLE USER CREATION
// app.post('/register', async (req, res) => {
//  // Set Content-Type header to application/json
//  req.headers['content-type'] = 'application/json';
//  const name = req.body.name;
//       const email =  req.body.email;
//       const password = req.body.password;

//       // Extract name, email, and password from the request body
//   // Log the extracted values to the console
//   console.log('Name:', name);
//   console.log('Email:', email);
//   console.log('Password:', password);
//   // Log the extracted values to the console

//          //  enforce required fields

//   if (!name || !email || !password ) {
//     res.status(400).send("All fields are required.");
//   }
//       // Create a new user using the User model
//       const user = new User({ name, email, password });

//       // Save the new user to the database
//       await user.save()
//       .then(savedUser => {
//               console.log('User document saved successfully:', savedUser);

//             })
//             .catch(error => {
//               console.error('Error saving User document:', error);

//             });

//   });
