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

// Get ALL
movieRouter.get("/", (req, res) => {
    res.status(200)
    res.send(movies)
})

// Get One
movieRouter.get("/:movieId" , (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The item with ID ${movieId} not found`)
        res.status(500)
        return next(error)
    }
    
    res.status(200).send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre){
        const error = new Error("No genre given")
        res.status(500)
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filteredMovies)
})

// Post One
movieRouter.post("/", (req, res) =>{
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.status(201).send(newMovie)
})

// delete
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie :(") 
})

// put/update
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.status(201).send(updatedMovie)
})






// another way to write the syntax:
// movieRouter.route("/")
// .get((req, res) => {
//     res.send(movies)
// })
// .post((req, res) =>{
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })


module.exports = movieRouter