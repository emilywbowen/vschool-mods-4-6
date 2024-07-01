const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    { firstName: "Han", lastName: "Solo", living: true, bountyAmount: 1500, type: "Jedi", _id: uuidv4()}
]

bountyRouter.route("/")
.get((req, res) => {
    res.send(bounties)
})
.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database. Go get yer booty.`)
})

module.exports = bountyRouter