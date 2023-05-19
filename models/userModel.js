const { Schema, default: mongoose } = require('mongoose')

const userSchema = new Schema({
    firstname: {
        type: String,
        trim: true
    },

    lastname: {
        type: String,
        trim: true
    },

    username: {
        type: String,
        required: [true, "Please choose a username"],
        trim: true,
        unique: true
    },

    email: {
        type: String,
        required: [true, "Please enter your email address"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter a Password"],
        trim: true
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)
module.exports = User