import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty.jsx"
import BountyForm from "./components/BountyForm.jsx"

export default function App(){

  const [bounties, setBounties] = useState([])

  function getBounties(){
    axios.get("api/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("api/bounties", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/api/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }
   function editBounty(updates, bountyId) {
    axios.put(`/api/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
   }

   useEffect(() => {
    getBounties()
   },[])

  return (
    <div className="bounty-container">
      <BountyForm
      submit={addBounty}
      btnText = "Add Bounty" />

      {bounties.map(bounty =>
        <Bounty {...bounty}
        key={bounty.firstName}
        deleteBounty = {deleteBounty}
        editBounty = {editBounty}/>
      )}

    </div>
  )
}