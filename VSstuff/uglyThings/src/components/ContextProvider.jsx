import React, { createContext } from "react";
export const Context = createContext();
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export function ContextProvider() {

// function to set state
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: ""
    });

    const [allThings, setAllThings] = useState([]);
    // const [saveThings, setSaveThings] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState("");
    

// use effect to get the api
    useEffect(() => {
    axios.get("https://api.vschool.io/emilywbowen/thing")
        .then((response) => {
            setAllThings(response.data); 
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
   return (
    <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Title"
                className="form--input"
                name="title"
                value={thing.title}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Description"
                className="form--input"
                name="description"
                value={thing.description}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Image URL"
                className="form--input"
                name="imgUrl"
                value={thing.imgUrl}
                onChange={handleChange}
                />

                <button 
                    className="form--button"
                    onClick={saveTheThing}
                    >
                        {isEditing ? "Save Changes" : "Save Thing"}
                    </button>
        </div>

        <div className="thing">
            <img src={thing.data} className="thing--image" alt="thing"/>
            <h2 className="thing--text title">{thing.title}</h2>
            <h2 className="thing--text description">{thing.description}</h2>
            <h2 className="thing--text imgUrl">{thing.imgUrl}</h2>
        </div>

        <div className="savedThings">
            {saveThings.map((savedThing)=> (
                <div key={savedThing._id} className="thing-item">
                    <img src={savedThing.data}
                    className="thing--image" alt="Saved Thing"/>
                    <h2 className="thing--text title">{savedThing.title}</h2>
                    <h2 className="thing--text description">{savedThing.description}</h2>
                    <h2 className="thing--text imgUrl">{savedThing.imgUrl}</h2>
                    <button onClick={() => editThing(savedThing._id)}>Edit</button>
                    </div>
            )
            )}
        </div>

    </main>
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