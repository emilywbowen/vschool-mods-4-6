import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
// import RecipeSearch from "./components/RecipeSearch";
import UserProfile from "./components/notInUse/UserProfile";
import AllRecipes from "./components/AllRecipes";
import SearchByCategory from "./components/SearchByCategory"
import SearchByIngredient from './components/notInUse/SearchByIngredient';
import NavBar from "./components/NavBar";
import RecipeForm from './components/RecipeForm';


export default function App(props) {


    return (
    <>
      <nav style={{margin: 10}}>
     <Link to="/" style={{padding: 5}}> 
     Home 
     </Link>
     <Link to="/about" style={{padding: 5}}> 
     About
     </Link>
     <Link to="/allRecipes" style={{padding: 5}}>
     All Recipes
     </Link>
     <Link to="/searchByCategory" style={{padding: 5}}> 
     Search by Category
     </Link>
     <Link to="/user" style={{padding: 5}}> 
     Profile
     </Link>
   </nav>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path="/allRecipes" element={<AllRecipes />}/>
          <Route path='/searchByCategory' element={<SearchByCategory />}/>
          <Route path='/user' element={<UserProfile />}/>
          {/* <Route path="/nav" element={<NavBar />}/> */}
          
        </Routes>

      </>
    );
}








// import React from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import About from './components/About'
// import Home from './components/Home'
// import RecipeSearch from "./components/RecipeSearch"
// import UserProfile from "./components/UserProfile"
// import NavBar from "./components/NavBar"
// import {ContextProvider} from './components/ContextProvider'


// export default function App(props) {

// //   const {randomRecipe,  
// //     getRandomRecipe, 
// //  } = useContext(Context);

//   return (
// <ContextProvider>
// <nav style={{margin: 10}}>
//       <Link to="/" style={{padding: 5}}> 
//       Home 
//       </Link>
//       <Link to="/about" style={{padding: 5}}> 
//       About
//       </Link>
//       <Link to="/search" style={{padding: 5}}> 
//       Recipe Search 
//       </Link>
//       <Link to="/user" style={{padding: 5}}> 
//       Profile
//       </Link>
//     </nav>

//   <Routes>
//     <Route path='/' element={<Home />}/>
//     <Route path='/about' element={<About />}/>
//     <Route path='/search' element={<RecipeSearch />}/>
//     <Route path='/user' element={<UserProfile />}/>
//     <Route Path="/nav" element={<NavBar />}/>
//   </Routes>
// </ContextProvider>
        
//   )
// }

