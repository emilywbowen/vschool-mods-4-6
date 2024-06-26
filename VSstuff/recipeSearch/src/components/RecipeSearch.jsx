import React, { useContext, useState, useEffect } from "react";
import { Context } from "./ContextProvider";
import axios from "axios";


export default function RecipeSearch(){
    
    // const {randomRecipe,  
    //     getRandomRecipe, 
    //  } = useContext(Context);

        // recipe, setRecipe, setRandomRecipe, saveRecipe, setSaveRecipe, isEditing, setIsEditing, editingId, setEditingId,save, editRecipe

        const [randomRecipe, setRandomRecipe] = useState({});
        useEffect(() => {
            function getRandomRecipe() {
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
                .then((response) => { console.log(response.data); setRandomRecipe(response.data);
                })
                .catch((error) => {
                console.error('Error fetching the recipe:', error);
                setError(error);
            }); }
            getRandomRecipe(); }, [] ) 

            console.log(randomRecipe)

    return(
        <div>
            <h1>test</h1>
            {/* <h2>{randomRecipe.meals[0].strMeal}</h2>
            <h2>{randomRecipe.meals[0].strMeal}</h2> */}
            {/* <h1>{randomRecipe.strInstructions}</h1> */}
            

            {/* <button className="button" onClick={handleClick}>Get a Random Recipe!
            </button> */}

            {/* <div id="MyDropdown" className="button-content">
                <a ref="#">Random Recipe</a>
                <a ref="#">Recipe by Main Ingredient: Under Construction</a>
                <a ref="#">Recipe by Geographical Area: Under Construction</a>
                <a ref="#">Recipe by Category: Under Construction</a>
            </div> */}

            <h1>Intention: Returns a drop down to search by area, category, or protein. An additional button for random searches. Current:Only search by random until I can really dig deeper into the API and figure out how to get the data. </h1>

            <p>Bring in the context to show API result</p>
        </div>

        
    )
}


// Search by random, area, category, protein