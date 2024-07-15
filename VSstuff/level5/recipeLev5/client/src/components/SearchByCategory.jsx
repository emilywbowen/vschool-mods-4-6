// dropdown = select

import React, { useState, useEffect} from "react";
import axios from "axios"
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm";

export default function SearchByCategory(props){
    const [recipes, setRecipes] = useState([])

    // function getRecipes(){
    //     axios.get("/api/recipes")
    //     .then(res => setRecipes(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    // }
    // console.log(getRecipes)

    function getByCategory(){
        axios.get("api/recipes/category")
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err))
        }

    function handleChange(e){
        const {name,type, value} = e.target
        setRecipes(prevRecipes => ({...prevRecipes, [name]: type}))
        
    }
    console.log(recipes)

    function handleSubmit(e){
        e.preventDefault()
        console.log(recipes)
        // props.submit(recipes, props._id)
        props.submit(recipes, props.category)
        setRecipes(recipes)
    }

    useEffect(() => {
        getByCategory()
    },[])
   


return(
    <>
        <form onSubmit={handleSubmit}>
            <select
                name="category"
                value={recipes.category}
                onChange={handleChange}
                required>
                    <option value ="">Select a Category</option>
                    <option value ="budget-friendly">Budget Friendly</option>
                    <option value ="kid-friendly">Kid Friendly</option>
                    <option value ="breakfast">Breakfast</option>
                    <option value ="lunch">Lunch</option>
                    <option value ="dinner">Dinner</option>
                    <option value ="dessert">Desserts</option>
                    <option value ="vegetarian">Vegetarian</option>

                </select>
        </form>
            
        <div>
            { recipes.map(recipe =>
                <Recipe
                {...recipes}
                key={recipes.category}/>)
                
            }
        </div>
    </>
)}