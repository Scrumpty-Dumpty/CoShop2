// MongoDB Cluster username: CoShopUser
// MongoDB Cluster password: n5K4KtS33C8cQRhs
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

async function connectToDB() {
  const uri = "mongodb+srv://CoShopUser:n5K4KtS33C8cQRhs@coshopcluster.iyjalfb.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
}

module.exports = {
  connectToDB
};
