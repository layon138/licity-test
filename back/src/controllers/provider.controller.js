const client = require("../db/db");

const listBuildingProject = async (req, res) => {
  try {
    await client.connect();
    const database = client.db(process.env.DATABASENAME);
    const collection = database.collection(process.env.COLLECTION);
    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);


    res.json({
      data: {
        list: findResult,
      },
      status: "success",
    });
    await client.close();
  } catch (error) {
    res.json({
      status: "failed",
    });
  }

};

module.exports = {
  listBuildingProject
};
