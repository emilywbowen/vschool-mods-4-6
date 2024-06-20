import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'


export default function App() {

  return (
    // Basic router set up <Router><Routes><Route>
    <Router> 
      <nav style={{margin: 10}}>
        <Link to= "/" style= {{padding: 5}}>
        Home
        </Link>
        <Link to= "/about" style= {{padding: 5}}>
        About
        </Link>
        <Link to= "/services" style= {{padding: 5}}>
        Services
        </Link>
      </nav>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        {/* Router makes the changes and does it's part constantly. Routes searches for different route names on request. Route changes the content that renders to the screen. requires two props: path and element. The path is used to define the endpoint of the URL. The element is what gets rendered and is what changes. */}
        <Route path='/about' element={<About />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      
    </Router>
  )
}

