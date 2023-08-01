const dbCollection = require('./connectionDb');

const deleteDb = async (i) => {
    const db = await dbCollection();
    const result = await db.deleteMany({ task: i });
    console.log(i)
    console.log(result)
}

module.exports = deleteDb;
