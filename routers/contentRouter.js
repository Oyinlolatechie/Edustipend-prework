const express = require('express')
const { getPosts, getComments } = require('../controller/contentController')
const authenticate = require('../middleware/authenticate')

const contentRouter = express.Router()


contentRouter.get('/posts', authenticate, getPosts)

contentRouter.get('/comments', authenticate, getComments)


module.exports = contentRouter