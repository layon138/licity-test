/*const mongoose = require('mongoose');


const database = mongoose.connect(
    'mongodb+srv://layonUser:Trabajo2021+@cluster0.hcmvkap.mongodb.net/?retryWrites=true&w=majority', 
    {dbName: "licitydb"},
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log("connect")
}).catch((error)=>{
    console.log(error)
})

module.exports = database;*/


const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = client;