import React, {useContext} from "react"
import { Link } from "react-router-dom"
// import { ThemeContext } from "./ContextProvider"

export default function NavBar (props) {
  // const {color} = useContext(ThemeContext)

return(

  <nav style={{margin: 10}}>
     <Link to="/" style={{padding: 5}}> 
     Home
     </Link>
     <Link to="/about" style={{padding: 5}}> 
     <button>About</button> 
     </Link>
     <Link to="/search" style={{padding: 5}}> 
     <button>Recipe Search</button> 
     </Link>
     <Link to="/user" style={{padding: 5}}> 
     <button>Profile</button> 
     </Link>
   </nav>

   )
}