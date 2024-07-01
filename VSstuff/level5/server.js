const express = require("express")
const app = express()

// middleware:
app.use(express.json())

// routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvShows", require("./routes/tvshowRouter.js") )


app.listen(9000, () => {
    console.log("The server is running on PORT 9000.")
})
