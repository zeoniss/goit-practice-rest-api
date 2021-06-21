const contacts = require("../controllers/contacts.json")
const ObjectId = requeire("mongodb").ObjectID
//  в обработчик добавляем операцию find, которой доставали контакты и отдаем их клиенту

const getContacts = async (req, res) => {
  const contacts = await req.db.Contacts.find({}).toArray()
  res.json({ contacts })
}

const getPostById = async (req, res) => {
  const { id } = req.params
  const [contacts] = await req.db.Contacts.findOne({
    _id: new ObjectId(id),
  })

  if (!contact) {
    return res.status(400).json({
      status: `failure, no posts with id '${id}' found!`,
    })
  }

  res.json({ contacts, status: "success" })
}

const addPost = (req, res) => {
  const { topic, text } = req.body

  contacts.push({
    id: new Date().getTime().toString(),
    topic,
    text,
  })

  res.json({ status: "success" })
}

const changePost = (req, res) => {
  const { topic, text } = req.body

  contacts.forEach((post) => {
    if (post.id === req.params.id) {
      post.topic = topic
      post.text = text
    }
  })

  res.json({ status: "success" })
}

const patchPost = (req, res) => {
  const { topic, text } = req.body

  contacts.forEach((post) => {
    if (post.id === req.params.id) {
      if (topic) {
        post.topic = topic
      }
      if (text) {
        post.text = text
      }
    }
  })

  res.json({ status: "success" })
}

const deletePost = (req, res) => {
  contacts = contacts.filter((item) => item.id !== req.params.id)
  res.json({ status: "success" })
}

module.exports = {
  getContacts,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
}
