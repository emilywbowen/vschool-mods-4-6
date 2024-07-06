const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    { firstName: "Han", lastName: "Solo", living: true, bountyAmount: 1500, type: "Jedi", _id: uuidv4()},
    { firstName: "Leia", lastName: "Organa", living: true, bountyAmount: 1500, type: "Jedi", _id: uuidv4()}
]

bountyRouter.get("/",(req, res) => {
    res.send(bounties)
})

bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database. Go get yer booty.`)
})

bountyRouter.delete("/:bountyId", async (req, res) =>{
    // try{ const bountyId = req.params.bountyId
    // const deletedBounty = await Bounty.findOneAndDelete({_id: bountyId});
    // return res.status(200).send(`You have successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName}`)
    // }catch(error){
    //     res.status(500);
    // }

    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    console.log(bountyIndex)
    bounties.splice(bountyIndex, 1)
    // res.send(`Removal of ${bountyIndex.firstName} ${bountyIndex.lastName} was successful. I hope you were able to get dat booty.`)
    res.send(`Removal of target was successful. I hope you were able to get dat booty.`)
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

module.exports = bountyRouter