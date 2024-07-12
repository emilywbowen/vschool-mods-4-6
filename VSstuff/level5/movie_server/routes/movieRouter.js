const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")
const Movie = require("../models/movie")


movieRouter.get("/", async(req, res, next) => {
    try{
        const foundMovies = await Movie.find()
        return res.status(200).send(foundMovies)
    } catch (error){
        res.status(500)
        return next(error)
    }
})

movieRouter.post("/", async(req, res, next) => {
    try {
        const newMovie = new Movie(req.body)
        const savedMovie = await newMovie.save()
        return res.status(201).send(savedMovie)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

movieRouter.delete("/:movieId", async(req, res, next) => {
    try {
        const movieId = req.params.movieId
        const deletedMovie = await Movie.findByIdAndDelete(movieId)
        // Another way to do the above:
        // const deletedMovie = await Movie.findOneAndDelete({_id: movieId})
        return res.status(200).send(`You have successfully deleted ${deletedMovie.title} `)
        
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

movieRouter.put("/:movieId", async(req, res, next) => {
    try {
        const movieId = req.params.movieId
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedMovie)
    } catch (error) {
        res.status(500)
        return next(error)
        
    }
})

movieRouter.get("/genre", async(req, res, next) => {
    try {
        const foundMovies = await Movie.find({genre: req.query.genre})
        return res.status(200).send(foundMovies)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// Connecting to directors schema:

movieRouter.post("/movieWithDirector/:directorId", async(req, res, next) => {
    try {
        req.body.author = req.params.directorId
        const newMovie = new Movie(req.body)
        const savedMovie = await newMovie.save()
        return res.status(201).send(savedMovie)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

movieRouter.get("/moviesByDirector/:directorId", async(req, res, next) => {
    try {
        const foundMovies = await Movie.find({author: req.params.directorId})
        return res.status(200).send(foundMovies)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = movieRouter

// pre-mongoose coding:
// const movies = [
//     { title: "Die Hard", genre: "action", _id: uuidv4() },
//     { title: "Star Wars IV", genre: "fantasy", _id: uuidv4() },
//     { title: "Lion King", genre: "fantasy", _id: uuidv4() },
//     { title: "Friday the 13th", genre: "horror", _id: uuidv4() }
   
// ]

// // 1 way to write the syntax:

// // Get ALL
// movieRouter.get("/", (req, res) => {
//     res.status(200)
//     res.send(movies)
// })

// // Get One
// movieRouter.get("/:movieId" , (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     if(!foundMovie){
//         const error = new Error(`The item with ID ${movieId} not found`)
//         res.status(500)
//         return next(error)
//     }
    
//     res.status(200).send(foundMovie)
// })

// // Get by genre
// movieRouter.get("/search/genre", (req, res, next) => {
//     const genre = req.query.genre
//     if(!genre){
//         const error = new Error("No genre given")
//         res.status(500)
//         return next(error)
//     }
//     const filteredMovies = movies.filter(movie => movie.genre === genre)
//     res.status(200).send(filteredMovies)
// })

// // Post One
// movieRouter.post("/", (req, res) =>{
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.status(201).send(newMovie)
// })

// // delete
// movieRouter.delete("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     movies.splice(movieIndex, 1)
//     res.send("Successfully deleted movie :(") 
// })

// // put/update
// movieRouter.put("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     const updatedMovie = Object.assign(movies[movieIndex], req.body)
//     res.status(201).send(updatedMovie)
// })






// // another way to write the syntax:
// // movieRouter.route("/")
// // .get((req, res) => {
// //     res.send(movies)
// // })
// // .post((req, res) =>{
// //     const newMovie = req.body
// //     newMovie._id = uuidv4()
// //     movies.push(newMovie)
// //     res.send(`Successfully added ${newMovie.title} to the database!`)
// // })


// module.exports = movieRouter