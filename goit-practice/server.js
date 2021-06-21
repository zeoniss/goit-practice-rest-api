const express = require("express")
const morgan = require("morgan")
require("dotenv").config()

const app = express()

const { connectMongo } = require("./src/db/connection")

const { contactsRouter } = require("./src/routers/contactsRouter")

const PORT = process.env.PORT || 8081

app.use(express.json())
app.use(morgan("tiny"))

app.use("/api/contacts", contactsRouter)

const start = async () => {
  await connectMongo()
  // const contacts = await Contacts.find({}).toArray()
  // console.log(contacts)

  app.listen(PORT, (err) => {
    if (err) console.error("Error at aserver launch:", err)
    console.log(`Server works at port ${PORT}!`)
  })
}

start()
