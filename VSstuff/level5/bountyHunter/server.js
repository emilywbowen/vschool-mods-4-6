const express = require("express")
const app = express()

// middleware:
app.use(express.json())

// routes
app.use("/bounties", require("./routes/bountyRouter.js"))


app.listen(8000, () => {
    console.log("PORT 8000 is up and running, ma'am!")
})