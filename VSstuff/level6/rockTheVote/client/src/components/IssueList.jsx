import { useContext } from "react"
import Issue from "./Issue"
import { UserContext } from "../context/UserProvider"


export default function IssueList(props){
    const {deleteIssue} = useContext(UserContext)

    const {issues} = props

    const issueElements = issues.map(issue => {
        return (
            <Issue {...issue} key = {issue._id}/>
        )
    })

    return (
        <div>
            {issueElements}
        </div>
    )
}