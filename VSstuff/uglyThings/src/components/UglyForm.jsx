import React, {useContext} from "react";
import { Context } from "./ContextProvider";  

export default function UglyForm() {
    const {formData, setFormData} = useContext(Context)
    //pass formdata from context
    return (
    <div>
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
                    > Tithe your Ugly Contribution!
                        {isEditing ? "Save Changes" : "Save Thing"}
                    </button>
        </div>
        </div>
        
    )
}