import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';
import IssueForm from './IssueForm';

function Profile() {

        const {user, getUserIssues, issues, addIssue } = useContext(UserContext)

        useEffect(() => {
            getUserIssues()
        }, [])
        console.log(issues)

    return ( 
        <>
        <h1> Hello {user.username}!</h1>
        <IssueForm submit = {addIssue}/>
        <IssueList issues = {issues} />
        </>
     );
}

export default Profile;