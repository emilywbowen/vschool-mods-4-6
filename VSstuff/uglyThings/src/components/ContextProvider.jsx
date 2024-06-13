import React, { createContext } from "react";
export const Context = createContext();
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export function ContextProvider({children}) {

// function to set state
    const [thing, setThing] = React.useState({
        title: "",
        description: "",
        imgUrl: ""
    });

    const [allThings, setAllThings] = React.useState([]);
    const [saveThings, setSaveThings] = React.useState([]);
    const [isEditing, setIsEditing] = React.useState([]);
    const [editingId, setEditingId] = React.useState([]);
    

// use effect to get the api
    React.useEffect(() => {
    axios.get("https://api.vschool.io/emilywbowen/thing")
        .then((response) => {
            setAllThings(response.data.data._id); 
                // is this the correct path?
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

// function to handle the submit
   function handleChange(event) {
        const { name, value } = event.target;
        setThing(prevThing => ({
        ...prevThing,
        [name]: value
     }));

//function to handle edit/delete
    function saveTheThing() {
        if(isEditing){
        setSaveThings(prevSaveThing => prevSaveThing.map((savedThing) =>
        savedThing.id === editingId ? { ...savedThing, title: thing.title, description: thing.description, imgUrl: thing.imgUrl} : savedThing
    ));
    setIsEditing(false);
    setEditingId(null);
    } else {
        const newThing = {
            ...thing,
            id: uuidv4(),
            title: thing.title,
            description: thing.description,
            imgUrl: thing.imgUrl
        };
        setSaveThings(prevSaveThing => [...prevSaveThing, newThing]);
    }
    setThing(prevThing => ({
        ...prevThing,
        title: "",
        description: "",
        imgUrl: "",
    }));
    }
    function editThing(id) {
        const thingToEdit = saveThings.find(t._id === _id);
        setThing({title: thingToEdit.title, description: thingToEdit.description, imgUrl: thingToEdit.imgUrl});
        setIsEditing(true);
        setEditingId(_id);
    }
   }

   //return statement goes below
}



// Use for handleChange or a place to run a getAll to save data in state.

// example from ThemeContext assignment

// import React, { createContext, useState } from 'react';

// export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState({
//     color: 'blue', // Default theme
//   });

//   const toggleTheme = () => {
//     setTheme(prevTheme => ({
//       color: prevTheme.color === "dark" ? "light" : "dark"
//     }));
//   };

//   return (
//     <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }