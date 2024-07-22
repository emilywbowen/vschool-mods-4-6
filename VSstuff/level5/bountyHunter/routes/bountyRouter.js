const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")
const Bounty = require("../models/bounty")


bountyRouter.get("/", async(req, res, next) => {
    try {
        const foundBounties = await Bounty.find()
        return res.status(200).send(foundBounties)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

bountyRouter.get("/living", async(req, res, next) => {
    try {
        const foundBounties = await Bounty.find({living: req.query.living})
        return res.status(200).send(foundBounties)
        // /bounties/living?living=true
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

bountyRouter.get("/_id", async(req, res, next) => {
    try {
        const foundBounties = await Bounty.find({_id: req.query._id})
        return res.status(200).send(foundBounties)
        // /bounties/_id?_id=(id number)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

bountyRouter.post("/", async(req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedBounty = await newBounty.save()
        return res.status(201).send(savedBounty)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

bountyRouter.delete("/:bountyId", async(req, res, next) => {
    try {
        const bountyId = req.params.bountyId
        const deletedBounty = await Bounty.findByIdAndDelete(bountyId)
        return res.status(200).send(`You have removed ${deletedBounty.firstName} ${deletedBounty.lastName} from your targets.`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

bountyRouter.put("/:bountyId", async(req, res, next) => {
    try {
        const bountyId = req.params.bountyId
        const updatedBounty = await Bounty.findByIdAndUpdate(bountyId, req.body, {new: true})
        return res.status(201).send(updatedBounty)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = bountyRouter

// pre-mongoose:
// const bounties = [
//     { firstName: "Han", lastName: "Solo", living: true, bountyAmount: 1500, type: "Jedi", _id: uuidv4()},
//     { firstName: "Leia", lastName: "Organa", living: true, bountyAmount: 1500, type: "Jedi", _id: uuidv4()}
// ]

// bountyRouter.get("/",(req, res) => {
//     res.send(bounties)
// })

// bountyRouter.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
// })

// bountyRouter.post("/", (req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//     res.send(newBounty)
// })

// bountyRouter.delete("/:bountyId",(req, res) =>{
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     console.log(bountyIndex)
//     bounties.splice(bountyIndex, 1)
//     res.send("Successfully deleted target.")
// })

// bountyRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
//     res.send(updatedBounty)
// })

// module.exports = bountyRouter