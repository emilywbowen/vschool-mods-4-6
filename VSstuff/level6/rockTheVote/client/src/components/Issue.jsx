import {useContext, useState} from "react"
import { UserContext } from "../context/UserProvider"
import IssueForm from "./IssueForm"

export default function Issue(props){

    const {deleteIssue} = useContext(UserContext)

    const {title, description, imgUrl, _id, issueId} = props
    // const [formData, setFormData] = useState()
    const [editToggle, setEditToggle] = useState(false)
    
    const initState = {
        title: "",
        description: "",
        imgUrl: ""
    }

    // function handleChange(e){
    //     const {name, value} = e.target
    //     setFormData(prevData => {
    //         return {
    //             ...prevData,
    //             [name]: value
    //         }
    //     })

    // }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     deleteIssue(formData)
    //     setFormData(initState)
    // }

    return(
        <div>
            { !editToggle ? 
            <>
            <h1>Title: {title}</h1>
            <h4>Issue description: {description}</h4>
            <img src={imgUrl}/>
            <button onClick={() => props.deleteIssue(_id)}>Delete Issue</button>
            <button onClick = {() => setEditToggle(prevToggle => !prevToggle)}>
                Edit Issue
            </button>

            </>
            :
            <>
            <IssueForm
            title={title}
            description={description}
            imgUrl={imgUrl}
            btnText="Submit Edit"
            submit={props.editIssue}/>
            <button
            onClick={() => setEditToggle (prevToggle => !prevToggle)}>
                Close
            </button>
            </>
            }   
        </div>
            


        // <div>
        //     <h1>Title: {title}</h1>
        //     <h4>Issue description: {description}</h4>
        //     <img src={imgUrl}/>
        //     <button onClick={() => props.deleteIssue(issueId)}>Delete Issue</button>

        // </div>
    )
}