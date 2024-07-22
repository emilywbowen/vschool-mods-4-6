import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){

    const initState = {
        user : JSON.parse(localStorage.getItem("user")) || {},
        token : localStorage.getItem("token") || "",
        allIssues: [],
        issues: [],
        errMsg: ""
    }

    // const initIssueState = {
    //     user: props.user || "",
    //     token: localStorage.getItem("token") || "",
    //     issues: props.issues || ""
    // }

    const [userState, setUserState] = useState(initState)
    const [issueState, setIssueState] = useState([])

    async function signup(creds){
        try {
            const res = await axios.post("/api/auth/signup", creds)
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data)
        } catch (error) {
            handleAuthErr(error.response.data.errMsg)
        }
    }

    function resetAuthErr(){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg: ""
            }
        })
    }

    async function login(creds) {
        try {
            const res = await axios.post("/api/auth/login", creds)
            const {user, token} = res.data
            localStorage.setItem("token",  token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data)
        } catch (error) {
            handleAuthErr(error.response.data.errMsg)
        }
    }

    async function logout(){
        try {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    token: "",
                    user: {}
                } 
            }
            )
        } catch (error) {
            console.log(error)
        }
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => {
            return{
                ...prevUserState,
                errMsg
            }
        })
    }

    async function getUserIssues(){
        try {
            const res = await userAxios.get("/api/main/issues/user")
            setUserState(prevState => {
                return {
                    ...prevState,
                    issues: res.data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function getAllIssues(){
        try {
            const res = await userAxios.get("/api/main/issues")
            setIssueState(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function addIssue(newIssue){
        try {
            const res = await userAxios.post("/api/main/issues", newIssue)
            setUserState(prevState => {
                return{
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteIssue(issueId) {
        try {
            const res = await userAxios.delete(`/api/main/issues/${issueId}`)
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id !== issueId)
            }))
            setIssueState(prevIssueState => prevIssueState.filter(issue => issue._id !== issueId))
        }
        catch (error) {
            console.log(error)
        }
    }

    async function editIssue(update, issueId){
        try {
            const res = await userAxios.put(`/api/main/issues/${issueId}`, update)
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => issue._id !== issueId ? issue: res.data)
            }))
            setIssueState(prevIssueState => prevIssueState.map(issue => issue._id !== issueId ? issue: res.data))

        } catch (error) {
            console.log(error)
        }
    }

    console.log(userState.user)

    return(
        <UserContext.Provider value = {{
            ...userState, 
            signup, 
            login, 
            logout, 
            getUserIssues,
            addIssue,
            getAllIssues,
            deleteIssue,
            issueState,
            editIssue,
            handleAuthErr,
            resetAuthErr
            }}>
            {props.children}
        </UserContext.Provider>
    )
}