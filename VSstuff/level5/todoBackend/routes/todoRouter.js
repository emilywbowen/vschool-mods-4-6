const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    {item: "Feed the cats", 
        location: "home",
        description: "Give the cats one scoop of food each.", 
        imageUrl: "https://plus.unsplash.com/premium_photo-1663013407819-b76906252650?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdCUyMGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
        completed: false, 
        _id: uuidv4()},
    {item: "Make coffee", 
        location: "home",
        description: "Fill water reservoir. Put a coffee filter in the basket. Add 2 scoops of ground coffee for each cup of water. Press 'brew'", 
        imageUrl: "https://images.unsplash.com/photo-1544641874-d1193df16adf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D", 
        completed: false, 
        _id: uuidv4()}
]

todoRouter.get("/", (req, res) => {
    console.log("all items received")
    res.send(todos)
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    console.log("One item received")
    res.send(foundTodo)
})

todoRouter.get("/search/location", (req, res) => {
    const location = req.query.location
    const filteredLocations = todos.filter(todo => todo.location === location)
    console.log("item by location successful")
    res.send(filteredLocations)
})

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    console.log("added item")
    res.send(`You've added ${newTodo.item} to your list!`)
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    console.log("deleted item")
    res.send("You have completed that task! Give yourself a sticker!")
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    console.log("Task updated")
    res.send(updatedTodo)
})

module.exports = todoRouter

