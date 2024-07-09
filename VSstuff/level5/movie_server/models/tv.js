const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tvSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.mongoose.model("Tv", tvSchema)