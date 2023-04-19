// MongoDB Cluster username: CoShopUser
// MongoDB Cluster password: 6TvlGsCx9PGmwpNl
const { MongoClient, ServerApiVersion } = require('mongodb');

async function connectToDB() {
  const uri = "mongodb+srv://CoShopUser:6TvlGsCx9PGmwpNl@CoShopCluster.mongodb.net/CoShopDB?retryWrites=true&w=majority";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect the client to the server 
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  connectToDB
};
