const express = require("express")
const app = express()
const morgan = require("morgan")

// middleware:
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/bounties", require("./routes/bountyRouter.js"))


app.listen(8000, () => {
    console.log("PORT 8000 is up and running, ma'am!")
})