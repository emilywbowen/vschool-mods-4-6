import React, {useContext} from "react";
import { Context } from "./ContextProvider";


export default function Thing() {
    const {allThings, setAllThings, isEditing, setIsEditing, formData, setFormData, editingId, setEditingId, handleChange, saveTheThing, editThing} = useContext(Context)

    return (
        <div>
            <div className="thing">
            <img src={formData.data} className="thing--image" alt="thing"/>
            <h2 className="thing--textTitle">{formData.title}</h2>
            <h2 className="thing--textDescription">{formData.description}</h2>
            <img src = {formData.imgUrl} className="thing--textImgUrl" />
        </div>

        <div className="thing">
            {allThings.map((savedThing)=> (
                <div key={savedThing._id} className="thing-item">
                    <img src={savedThing.data}
                    className="thing--image" alt="Saved Thing"/>
                    <h2 className="thing--textTitle">{savedThing.title}</h2>
                    <h2 className="thing--textDescription">{savedThing.description}</h2>
                    <img src = {savedThing.imgUrl} className="thing--image" />
                    <button className="edit" onClick={() => editThing(savedThing._id)}>Edit</button>
                    </div>
            )
            )}
        </div> 
        </div>
        // what to return....
    )
}




 