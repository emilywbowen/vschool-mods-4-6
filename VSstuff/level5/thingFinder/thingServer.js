const express = require("express")
const app = express()

app.use(express.json())

app.use("/food", (req, res, next) => {
    console.log("The Middleware was executed")
    next()
})

app.get("/food", (req, res, next) => {
    console.log("Get request received")
    res.send("Yum yum yum!")
})

app.use("/items", require("./routes/thingRouter.js"))

app.listen(8500, () => {
    console.log("You are running on PORT 8500.")
})