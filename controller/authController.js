const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



//@desc sign up
//@route POST /auth/signup
//@access Public
exports.signUp = async (req, res, next) => {
    const { username, email, password } = req.body

    //hash user inputted password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user, with hashed password
    try {
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            status: "success",
            data: user,
            token: getToken(user),
        })
    } catch (err) {
        return next(err)
    }
}


//@desc Sign in
//@route GET /auth/signin
//@access Public
exports.signIn = async (req, res, next) => {
    const { email, password } = req.body

    //Validate user input
    if (!email || !password) {
        res.status(400)
        return next(new Error("Enter email and password"))
    }

    try {
        //check if email entered exists
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400)
            return next(new Error('User not found'))
        }

        //check if password entered macthes with stored harshed password
        if (user && (await bcrypt.compare(password, user.password))) {

            res.status(200).json({
                status: "success",
                data: user,
                token: getToken(user)
            })
        } else {
            res.status(400)
            return next(new Error("Incorrect password"))
        }

    } catch (err) {

        return next(err)
    }
}

//generate token
const getToken = (user) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30d' })
    return token
}
