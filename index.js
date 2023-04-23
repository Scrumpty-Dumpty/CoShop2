// connect to the users database
const { connectToDB } = require ('./client/assets/scripts/dbConnection.js');
const User = require ('./client/models/User.js');

connectToDB();

const express = require("express");
const app = express();
app.use(express.json());
// use the express.urlencoded middleware to parse form data and extract the fields name, email, and pass1 from the request body. 
app.use(express.urlencoded({ extended: true }));

const bcrypt = require('bcrypt');

app.use(express.static(__dirname + "/client"));

const port = process.env.PORT || 3000;
app.get("/test", function (request, response) {
  response.type("text/plain");
  response.send("Node.js and Express running on port=" + port);
});

const users = []
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.pass1, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
const newUser = new User({
    name: users[0].name,
          email: users[0].email,
          password: users[0].password
      });
      console.log('new user input values: ', newUser);
      await newUser.save();
} catch (err){
  console.log('user not entered into database: ', err);  
  }
})
app.listen(port, function () {
  console.log("Server is running at http://localhost:3000/");
});