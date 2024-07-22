const express = require("express")
const app = express()

// middleware
app.use(express.json())

// routes
app.use("/todos", require("./routes/todoRouter.js"))


app.listen(9000, () => {
    console.log("The server is running is not over 9000, b/c it is PORT 9000")
})