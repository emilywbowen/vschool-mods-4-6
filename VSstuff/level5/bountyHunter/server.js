const express = require("express")
const app = express()
const morgan = require("morgan")
require ("dotenv").config()
const mongoose = require("mongoose")

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://emilywbowen:Sw33ty1!@cluster0.u9o1pjx.mongodb.net/?appName=Cluster0";

// middleware:
app.use(express.json())
app.use(morgan("dev"))

// mongoDB connection
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
async function connectToDb(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    }

    catch(err) {
        console.log(err)
    }
}

connectToDb()


// routes
app.use("/api/bounties", require("./routes/bountyRouter.js"))


app.listen(8000, () => {
    console.log("PORT 8000 is up and running, ma'am!")
})