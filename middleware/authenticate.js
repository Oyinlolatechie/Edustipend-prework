const jwt = require('jsonwebtoken');
const User = require('../models/userModel')


const authenticate = async (req, res, next) => {

    let token
    //check req.header for token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token
            req.user = await User.findById(decodeToken.id).select("-password")

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            return next(new Error("You're not authorized", error))

        }
    }

    if (!token) {
        res.status(400)
        return next(new Error("No token, not authorized"))
    }
}

module.exports = authenticate