const express = require("express")
const app = express()
const morgan = require("morgan")

// middleware:
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/movies", require("./routes/movieRouter.js"))
app.use("/api/tvShows", require("./routes/tvshowRouter.js") )


app.listen(9000, () => {
    console.log("The server is running on PORT 9000.")
})
