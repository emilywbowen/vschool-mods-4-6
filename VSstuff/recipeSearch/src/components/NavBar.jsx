 import React from "react"
 import { Link } from "react-router-dom"

 export default function NavBar () {
 return(

 <nav style={{margin: 10}}>
      <Link to="/" style={{padding: 5}}> 
      Home 
      </Link>
      <Link to="/about" style={{padding: 5}}> 
      About
      </Link>
      <Link to="/search" style={{padding: 5}}> 
      Recipe Search 
      </Link>
      <Link to="/user" style={{padding: 5}}> 
      Profile
      </Link>
    </nav>
    )
 }