const dbConnection = require('./connectionDb')

const insertItem=async(tasks)=>{
    const db = await dbConnection();
    const result = db.insertOne({task:tasks})
}
module.exports = insertItem;