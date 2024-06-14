import React, {useContext} from "react";
import { Context } from "./ContextProvider";  

export default function UglyForm() {
    const {fallThings, setAllThings, isEditing, setIsEditing, formData, setFormData, editingId, setEditingId, handleChange, saveTheThing, editThing} = useContext(Context)
    //pass formdata from context
    return (
    <div>
        <div className="form">
            <input 
                type="text"
                placeholder="Title"
                className="form--input"
                name="title"
                value={formData.title}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Description"
                className="form--input"
                name="description"
                value={formData.description}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Image URL"
                className="form--input"
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
                />

                <button 
                    className="form--button"
                    onClick={saveTheThing}
                    > Tithe your Ugly Contribution!
                        {isEditing ? "Save Changes" : "Save Thing"}
                    </button>
        </div>
        </div>
        
    )
}