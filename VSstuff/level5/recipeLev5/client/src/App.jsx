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
import axios from 'axios';
import SubmitRecipe from './components/notInUse/SubmitRecipe';


export default function App(props) {
  const [recipes, setRecipes] = useState([])

    function getRecipes(){
        axios.get("/api/recipes")
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }
    useEffect(() => {
      getRecipes()
  }, [])

  function addRecipe(newRecipe){
    axios.post('/api/recipes', newRecipe)
    .then(res => setRecipes(prevRecipes => [...prevRecipes, res.data]))
    .catch(err => console.log(err))
  }

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
     <Link to="/submitRecipe" style={{padding: 5}}> 
     Submit a Recipe
     </Link>
   </nav>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path="/allRecipes" element={<AllRecipes recipes={recipes}/>}/>
          <Route path='/searchByCategory' element={<SearchByCategory recipes={recipes}/>}/>
          <Route path='/user' element={<UserProfile />}/>
          <Route path= "/submitRecipe" element={<SubmitRecipe addRecipe={addRecipe}/>}/>
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

