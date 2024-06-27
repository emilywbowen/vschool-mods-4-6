import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const Context = createContext();

export default function ContextProvider({ children }) {
    const [recipe, setRecipe] = useState({
        recipeName: "",
        recipeInfo: "",
        recipeImage: ""
    });
    const [randomRecipe, setRandomRecipe] = useState({});
    const [saveRecipe, setSaveRecipe] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const variable = "hello";

    function getRandomRecipe() {
        setLoading(true);
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => {
                console.log(response.data);
                setRandomRecipe(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching the recipe:', error);
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getRandomRecipe();
    }, []);

    function save() {
        if (isEditing) {
            setSaveRecipe(prevSaveRecipe => prevSaveRecipe.map((savedRecipe) =>
                savedRecipe.id === editingId ? { ...savedRecipe, recipeName: recipe.recipeName, recipeInfo: recipe.recipeInfo } : savedRecipe
            ));
            setIsEditing(false);
            setEditingId(null);
        } else {
            const newRecipe = {
                ...recipe,
                id: uuidv4(),
                recipeName: recipe.recipeName,
                recipeInfo: recipe.recipeInfo,
                recipeImage: recipe.recipeImage,
            };
            setSaveRecipe(prevSaveRecipe => [...prevSaveRecipe, newRecipe]);
        }
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            recipeName: "",
            recipeInfo: ""
        }));
    }

    function editRecipe(id) {
        const recipeToEdit = saveRecipe.find(r => r.id === id);
        setRecipe({ recipeName: recipeToEdit.recipeName, recipeInfo: recipeToEdit.recipeInfo, recipeImage: recipeToEdit.recipeImage });
        setIsEditing(true);
        setEditingId(id);
    }

    return (
        <Context.Provider value={{
            variable,
            recipe,
            setRecipe,
            randomRecipe,
            setRandomRecipe,
            saveRecipe,
            setSaveRecipe,
            isEditing,
            setIsEditing,
            editingId,
            setEditingId,
            save,
            editRecipe,
            getRandomRecipe,
            error,
            loading
        }}>
            {children}
        </Context.Provider>
    );
}







// // to be used by recipe search, recipe submit, and save

// // functions for Get requests of API
// import React, { createContext, useState, useEffect} from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// export const Context = createContext();

// export default function ContextProvider({children}) {
//     // function to get random recipe from the API
//     const [recipe, setRecipe] = useState({
//         recipeName: "",
//         recipeInfo: "",
//         recipeImage: ""
//     });
//     const [randomRecipe, setRandomRecipe] = useState({});
//     const [saveRecipe, setSaveRecipe] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editingId, setEditingId] = useState(null);

//     const variable = "hello"

//     useEffect(() => {
//         function getRandomRecipe() {
//         axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
//             .then((response) => { console.log(response.data); setRandomRecipe(response.data);
//             })
//             .catch((error) => {
//             console.error('Error fetching the recipe:', error);
//             setError(error);
//         }); }
//         getRandomRecipe(); }, [] ) 


//     // function handleClick(event) {
//     //     const {name, value} = event.target;
//     //     setRecipe(prevRecipe => ({
//     //         ...prevRecipe,
//     //         [name]: value
//     //     }));
//     // }

//     function save() {
//         if (isEditing) {
//             setSaveRecipe(prevSaveRecipe => prevSaveRecipe.map((savedRecipe) => 
//             savedRecipe.id === editingId ? {...savedRecipe, recipeName: recipe.recipeName, recipeInfo: recipe.recipeInfo} : savedRecipe
//         ));
//         setIsEditing(false);
//         setEditingId(null)
//         } else {
//             const newRecipe = {
//                 ...recipe,
//                 id: uuidv4(),
//                 recipeName: recipe.recipeName,
//                 recipeInfo: recipe.recipeInfo,
//                 recipeImage: recipe.recipeImage,
//             };
//             setSaveRecipe(prevSaveRecipe => [...prevSaveRecipe, newRecipe]);
//         }
//         setRecipe(prevRecipe => ({
//             ...prevRecipe,
//             recipeName:"",
//             recipeInfo:","
//         }));
//     }

//     function editRecipe(id) {
//         const recipeToEdit = saveRecipe.find(r => r.id === id);
//         setRecipe({recipeName: recipeToEdit.recipeName, recipeInfo: recipeToEdit.recipeInfo, recipeImage: recipeToEdit.recipeImage});
//         setIsEditing(true);
//         setEditingId(id);
//     }

//     // function to delete the recipe from state

//     return(
//         <Context.Provider value={{
//             variable,
//             recipe,
//             setRecipe,
//             randomRecipe,
//             setRandomRecipe,
//             saveRecipe,
//             setSaveRecipe,
//             isEditing,
//             setIsEditing, 
//             editingId,
//             setEditingId, 
//             save,
//             editRecipe,
//             getRandomRecipe
//         }}>
//             {children}
//             </Context.Provider>
//     )
// }