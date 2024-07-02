const express = require("express")
const app = express()

app.use(express.json())

app.use("/items", require("./routes/thingRouter.js"))

app.listen(8500, () => {
    console.log("You are running on PORT 8500.")
})