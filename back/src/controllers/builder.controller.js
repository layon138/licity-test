const client = require("../db/db");

const createBuildingProject = async (req, res) => {
  try {
    await client.connect();
    const object = req.body;
    const database = client.db(process.env.DATABASENAME);
    const collection = database.collection(process.env.COLLECTION);
    const resultado=await collection.insertOne(object);
    console.log(resultado)
    res.json({
      message: "Proyecto creado",
      status: "success",
    });
    await client.close();
  } catch (error) {
    console.log(error);
    res.json({
      message: "error al crear el proyecto",
      status: "failed",
    });
  }
};


module.exports = {
    createBuildingProject
};
