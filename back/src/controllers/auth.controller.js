const dayjs = require("dayjs");
const client = require("../db/db");
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.PASSWORDKEY, { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 })

const authUser = async (req, res) => {
  const user = req.body;
  await client.connect();
  const database = client.db(process.env.DATABASENAME);
  const collection = database.collection(process.env.USERCOLLECTION);
  const findResult = await collection.find({email:user.email}).toArray();

  const encryptedString = cryptr.decrypt(findResult[0].password);

  if (findResult && encryptedString===user.password) {
    res.json({
      message: "usuario encontrado",
      user:findResult[0],
      status: "success",
    });
  } else {
    res.json({
      message: "usuario no encontrado",
      status: "failed",
      token: "",
    });
  }
};



const createUser = async (req, res) => {
  try {
    let object = req.body;
    object.password= cryptr.encrypt(object.password) 
    await client.connect();
    const database = client.db(process.env.DATABASENAME);
    const collection = database.collection(process.env.USERCOLLECTION);
    console.log(database)
    await collection.insertOne(object);
    res.json({
      message: "usuario creado",
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error al crear",
      status: "failed",
    });
  }
};

module.exports = {
  createUser,
  authUser,
};
