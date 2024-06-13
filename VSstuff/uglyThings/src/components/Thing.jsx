import React, {useContext} from "react";
import { Context } from "./ContextProvider";


export default function Thing() {
    const {allThings, setAllThings, isEditing, setIsEditing, formData, setFormData, editingId, setEditingId, handleChange, saveTheThing, editThing} = useContext(Context)

    return (
        <div>
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
        </div>
        // what to return....
    )
}




 