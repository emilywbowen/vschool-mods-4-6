import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import RecipeSearch from "./components/RecipeSearch"
import UserProfile from "./components/UserProfile"
import NavBar from "./components/NavBar"
import ContextProvider from './components/ContextProvider'


export default function App(props) {

//   const {randomRecipe,  
//     getRandomRecipe, 
//  } = useContext(Context);

  return (
<ContextProvider>
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

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/search' element={<RecipeSearch />}/>
    <Route path='/user' element={<UserProfile />}/>
    <Route Path="/nav" element={<NavBar />}/>
  </Routes>
</ContextProvider>
        
  )
}

