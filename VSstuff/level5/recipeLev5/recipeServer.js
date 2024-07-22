const express = require("express")
const app = express()
const morgan = require("morgan")
require ("dotenv").config()
const mongoose = require("mongoose")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/recipes", require("./routes/recipeRouter.js"))


// connect to database
async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
}

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

connectToDatabase()

// listen

app.listen(9000, () => {
    console.log("Your server is at table 9000.")
})