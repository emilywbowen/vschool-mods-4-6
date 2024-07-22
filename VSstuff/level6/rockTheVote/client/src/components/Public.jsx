import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

function Public() {

    const {user, getAllIssues, issueState} = useContext(UserContext)

    useEffect(() => {
        getAllIssues()
    }, [])
  

    return ( 
        <>
        <h1> Hello {user.username}!</h1>
        <IssueList issues = {issueState} />
        </>
     );
}

export default Public;