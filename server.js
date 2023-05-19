//require necessary modules
const express = require('express');
require('dotenv').config();
const db = require('./models/config');
const errorHandler = require('./middleware/errorHandler');
const authRouter = require('./routers/authRouter');
const contentRouter = require('./routers/contentRouter');

const PORT = process.env.PORT || 3000


const app = express()


app.use(express.json())


app.use('/auth', authRouter);
app.use('/api', contentRouter)

app.get('/', (req, res) => {
    res.status(200)
        .json({
            status: "success",
            message: "Welcome home"
        })
})

db.connectToMongoDB()

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server now listening on http://localhost:${PORT}`)
})