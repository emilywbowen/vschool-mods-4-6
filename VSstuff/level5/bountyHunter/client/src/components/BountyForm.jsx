import React, { useState } from "react";

export default function BountyForm(props) {
    const initInputs ={firstName: props.firstName || "", lastName: props.lastName || "", living: props.living || false, bountyAmount: props.bountyAmount || "", type: props.type || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value,type,checked} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
             [name]: type === "checkbox" ? checked : value
        }))
    }
    console.log(inputs)

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs, props._id)
        !props.handleToggle && setInputs(initInputs)
        props.handleToggle && props.handleToggle()
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            required
            placeholder="First Name"/>

            <input type="text"  
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"/>
            <label>
            Is the target alive?
            
            <input
            name="living"
            checked={inputs.living}
            type="checkbox"
            onChange={handleChange}
            placeholder="Living: Yes, no, or unknown"/>
            </label>
            <input type="text"
            name="bountyAmount"
            value={inputs.bountyAmount}
            onChange={handleChange}
            required
            placeholder="Reward Amount: "/>

            {/* <input type="text"
            name="type"
            value={inputs.type}
            onChange={handleChange}
            placeholder="Sith, Jedi, or other (notate the other type)"/> */}
            <select
                name="type"
                value={inputs.type}
                onChange={handleChange}
                required
            >
                <option value ="">Affiliation?</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
                <option value="Unknown">Unknown</option>
            </select>

            <button> { props.btnText } </button>

        </form>
    )
}