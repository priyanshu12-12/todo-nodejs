const dbConnection = require("./connectionDb");

const find = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  return data;
  console.log(data)
};
find()
module.exports = find;