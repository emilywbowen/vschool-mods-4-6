const express = require("express")
const thingRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const items = [
    {name: "banana", type: "food", price: 200, _id: uuidv4()},
    {name: "pants", type: "clothing", price: 2500, _id: uuidv4()},
    {name: "basket ball", type: "toy", price: 1000, _id: uuidv4()},
    {name: "rockem sockem robots", type: "toy", price: 1500, _id: uuidv4()},
    {name: "shirt", type: "clothing", price: 800, _id: uuidv4()},
    {name: "soup", type: "food", price: 300, _id: uuidv4()},
    {name: "flour", type: "food", price: 100, _id: uuidv4()}
]

thingRouter.get("/", (req, res) => {
    res.send(items)
})

thingRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = items.find(item => item._id === itemId)
    res.send(foundItem)
})

thingRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredItems = items.filter(item => item.type === type)
    res.send(filteredItems)
})

module.exports = thingRouter