const mongoose = require('mongoose')

const MongoDB_URI = process.env.MongoDB_URI

const connectToMongoDB = () => {
    mongoose.connect(MongoDB_URI)

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully')
    })

    mongoose.connection.on('error', (error) => {
        console.log('An error occured while trying to connect to database', error)
    })
}

module.exports = { connectToMongoDB }