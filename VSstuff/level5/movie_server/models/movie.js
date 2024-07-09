const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true

    },
    genre: {
        type: String
    }
})

module.exports = mongoose.model("Movie", movieSchema)