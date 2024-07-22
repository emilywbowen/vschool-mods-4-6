import React , {useState, useContext} from "react"
import { UserContext } from "../context/UserProvider"

export default function IssueForm(props){

    const {addIssue, deleteIssue} = useContext(UserContext)


    const initState = {
        title: props.title || "",
        description: props.description ||  "",
        imgUrl: props.imgUrl || ""
    }

    const [formData, setFormData] = useState(initState)

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value 
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(formData, props.issueId)
        // deleteIssue(formData)
        !props.setEditToggle && setFormData(initState)
        props.setEditToggle && props.setEditToggle(prevData => !prevData)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title of Issue"
            />
            <input 
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a description"
            />
            <input 
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
                placeholder="Image URL if available"
            />
            <button>Submit</button>
        </form>
    )
}