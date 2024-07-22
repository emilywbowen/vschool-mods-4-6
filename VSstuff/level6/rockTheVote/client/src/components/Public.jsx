import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

function Public() {

    const {user, getAllIssues, issues} = useContext(UserContext)

    useEffect(() => {
        getAllIssues()
    }, [])
    console.log(issues)

    return ( 
        <>
        <h1> Hello {user.username}!</h1>
        <IssueList issues = {issues} />
        </>
     );
}

export default Public;