const express = require("express")
const app = express()
const morgan = require("morgan")
require ("dotenv").config()
const mongoose = require("mongoose")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/inventory", require("./routes/inventoryRouter.js"))

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (err) {
        console.log(err)
    }
}

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

connectToDb()

app.listen(8000, () => {
    console.log("The server is running on port 8000")
})