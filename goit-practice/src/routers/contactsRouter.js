const express = require("express")
const router = new express.Router()

const {
  addPostValidation,
  patchPostValidation,
} = require("../middlewares/validationMiddleware")

const modelsMiddleware = require("../middlewares/models")

router.use(modelsMiddleware)

const {
  getPosts,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
  getContacts,
} = require("../controllers/postsController")
const { required } = require("joi")

router.get("/", getContacts)
router.get("/:id", getPostById)
router.post("/", addPostValidation, addPost)
router.put("/:id", addPostValidation, changePost)
router.patch("/:id", patchPostValidation, patchPost)
router.delete("/:id", deletePost)

module.exports = { contactsRouter: router }
