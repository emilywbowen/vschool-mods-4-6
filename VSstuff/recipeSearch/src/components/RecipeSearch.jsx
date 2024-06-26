import React, { useContext, useState, useEffect } from "react";
import { Context } from "./ContextProvider";
import axios from "axios";


export default function RecipeSearch(){
    
    // const {randomRecipe,  
    //     getRandomRecipe, 
    //  } = useContext(Context);

        // recipe, setRecipe, setRandomRecipe, saveRecipe, setSaveRecipe, isEditing, setIsEditing, editingId, setEditingId,save, editRecipe

        const [randomRecipe, setRandomRecipe] = useState([]);
        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            function getRandomRecipe() {
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
                .then((response) => { console.log(response.data); setRandomRecipe(response.data);
                    setLoading(false)
                })
                .catch((error) => {
                console.error('Error fetching the recipe:', error);
                setError(error);
                    setLoading(false)
            }); }
            getRandomRecipe(); }, [] )
            
            if (loading) { return <p>Loading...</p>; }
            if (error) { return <p>Error fetching recipe: {error.message}</p>;} // Show error message if there was an error

            console.log(randomRecipe)

    return(

        <div>

            {randomRecipe && randomRecipe.meals ? ( 
                <div>
                    <h2>{randomRecipe.meals[0].strMeal}</h2>
                    {/* <h2>{randomRecipe.meals[0].strIngredient1}</h2> */}
                    <h2>{randomRecipe.meals[0].strInstructions}</h2>

                    </div>
            ) : (<p>No recipe found.</p>
                
            )}

            {/* <h1>test</h1>
            <h2>How to return an array....</h2> */}
            {/* <h2>{randomRecipe.meals[0].strMeal}</h2> */}
            {/* <h2>{randomRecipe.meals[0].strIngredient}</h2> */}
            

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