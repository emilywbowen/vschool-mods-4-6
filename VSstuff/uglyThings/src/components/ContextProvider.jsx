import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import UglyForm from "./UglyForm";


export function ContextProvider(props) {

// function to set state
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: ""
    });
    const [allThings, setAllThings] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    

// use effect to get the api
    function getUglyThings() {
    axios.get("https://api.vschool.io/emilywbowen/thing")
        .then((response) => {
            console.log(response.data)
            setAllThings(response.data); 
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getUglyThings()
    }, [])

// function to handle the submit
   function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevThing => ({ 
        ...prevThing,
        [name]: value
     }));

//function to handle edit/delete
    function saveTheThing() {
        if(isEditing){
        setAllThings(prevSaveThing => prevSaveThing.map((savedThing) =>
            //do I also change "setSaveThings" to "setAllThings"?
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
        setAllThings(prevSaveThing => [...prevSaveThing, newThing]);
                //use setAllThings in this function instead bc saveThings isn't necessary as state

    }
    setFormData(prevData => ({
        ...prevData,
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
   return (
    <div>
        <Context.Provider value={{allThings, setAllThings, isEditing, setIsEditing, formData, setFormData, editingId, setEditingId, handleChange, saveTheThing, editThing}}>
            {props.children}
        </Context.Provider>

    </div>
   )
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