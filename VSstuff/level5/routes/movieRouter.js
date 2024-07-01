const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const movies = [
    { title: "Die Hard", genre: "action", _id: uuidv4() },
    { title: "Star Wars IV", genre: "fantasy", _id: uuidv4() },
    { title: "Lion King", genre: "fantasy", _id: uuidv4() },
    { title: "Friday the 13th", genre: "horror", _id: uuidv4() }
   
]

// 1 way to write the syntax:
// movieRouter.get("/", (req, res) => {
//     res.send(movies)
// })

// movieRouter.post("/", (req, res) =>{
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })

// another way to write the syntax:
movieRouter.route("/")
.get((req, res) => {
    res.send(movies)
})
.post((req, res) =>{
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database!`)
})


module.exports = movieRouter