import React, {useState} from "react";
import BountyForm from "./BountyForm";

export default function Bounty(props) {
    const { firstName, lastName, living, type, bountyAmount, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    console.log(props)

    function handleToggle(){
        setEditToggle(prevToggle => !prevToggle)
    }

    return(
        <div className="bounty">
            { !editToggle ?
            <>
            <h1>Name: {firstName} {lastName}</h1>
            <p>Price: {bountyAmount} credits</p>
            <p>Still Living: {living ? "Target Alive" : "Target Eliminated"}</p>
            <p>Affiliation: {type}</p>
            <button className="delete-btn" onClick={() => props.deleteBounty(_id)}>
                Delete Target
            </button>
            <button className="edit-btn" 
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit Target Data</button>
            
            </>
        :
            <>
                <BountyForm
                firstName={firstName}
                lastName={lastName}
                _id={_id}
                bountyAmount={bountyAmount}
                living={living}
                type={type}
                handleToggle={handleToggle}
                btnText="Submit Edit"
                submit={props.editBounty}/>
                <button onClick={() => setEditToggle (prevToggle => !prevToggle)}>Cancel Edit</button>

            </>
            }

        </div>
    )
}