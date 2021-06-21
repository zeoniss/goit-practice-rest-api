const MongoClient = require("mongodb").MongoClient
const collections = {}

const getCollections = () => {
  return collections
}

const connectMongo = async () => {
  // Подключаемся к БД
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //из клиента достаем БД
  const db = client.db()
  collections.Contacts = db.collection("contacts")
}

module.exports = { connectMongo, getCollections }
