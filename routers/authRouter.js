const express = require('express')
const { signUp, signIn } = require('../controller/authController')

const authRouter = express.Router()


authRouter.post('/signup', signUp)

authRouter.get('/signin', signIn)


module.exports = authRouter