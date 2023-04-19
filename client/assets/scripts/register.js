// const express = require('express');
// const bodyParser = require('body-parser');
// const { connectToDB } = require('./dbConnection');

// const app = express();
// app.use(bodyParser.json());


// // Route to handle user creation
// app.post('/register', async (req, res) => {
//   try {
//     // Connect to MongoDB
//     const client = await connectToDB();

//     // Get user information from request body
//     const { name, email, password } = req.body;

//     // Insert user document into "users" collection
//     const result = await client.db('CoShopDB').collection('users').insertOne({ name, email, password });

//     // Close MongoDB connection
//     await client.close();

//     // Send success response
//     res.status(200).json({ message: "User created successfully", data: result.ops[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to create user" });
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
