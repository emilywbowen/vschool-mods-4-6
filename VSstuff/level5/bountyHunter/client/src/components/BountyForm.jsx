import React, { useState } from "react";

export default function BountyForm(props) {
    const initInputs ={firstName: props.firstName || "", lastName: props.lastName || "", living: props.living || "", bountyAmount: props.bountyAmount || "", type: props.type || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            placeholder="First Name"/>

            <input type="text"  
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            placeholder="Last Name"/>

            <input type="text"
            name="living"
            value={inputs.living}
            onChange={handleChange}
            placeholder="Living: Yes, no, or unknown"/>

            <input type="text"
            name="bountyAmount"
            value={inputs.bountyAmount}
            onChange={handleChange}
            placeholder="Reward Amount: "/>

            <input type="text"
            name="type"
            value={inputs.type}
            onChange={handleChange}
            placeholder="Sith, Jedi, or other (notate the other type)"/>

            <button> { props.btnText } </button>

        </form>
    )
}