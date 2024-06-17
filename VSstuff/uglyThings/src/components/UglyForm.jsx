import React, { useContext } from 'react';
import { Context } from './ContextProvider';

function UglyForm() {
  const { formData, handleChange, handleSubmit, isEditing } = useContext(Context);

  return (
    <form onSubmit={handleSubmit} className= "form">
      <input 
        type="text" 
        name="title" 
        value={formData.title} 
        onChange={handleChange} 
        placeholder="Title" 
        className="form--input"
      />
      <input 
        type="text" 
        name="description" 
        value={formData.description} 
        onChange={handleChange} 
        placeholder="Description" 
        className="form--input"

      />
      <input 
        type="text" 
        name="imgUrl" 
        value={formData.imgUrl} 
        onChange={handleChange} 
        placeholder="Image URL" 
        className="form--input"

      />
      <button type="submit" className="form--button">{isEditing ? 'Update' : 'Add'} Thing</button>
    </form>
  );
}

export default UglyForm;


// Code wasn't working, so I asked chatGPT for help editing, deleting, and posting to the api. Below is the original code that worked to bring in the API, but not to update the api.

// import React, {useContext} from "react";
// import { Context } from "./ContextProvider";  

// export default function UglyForm() {
//     const {fallThings, setAllThings, isEditing, setIsEditing, formData, setFormData, editingId, setEditingId, handleChange, saveTheThing, editThing} = useContext(Context)
//     //pass formdata from context
//     return (
//     <div>
//         <div className="form">
//             <input 
//                 type="text"
//                 placeholder="Title"
//                 className="form--input"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 />

//                 <input 
//                 type="text"
//                 placeholder="Description"
//                 className="form--input"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 />

//                 <input 
//                 type="text"
//                 placeholder="Image URL"
//                 className="form--input"
//                 name="imgUrl"
//                 value={formData.imgUrl}
//                 onChange={handleChange}
//                 />

//                 <button 
//                     className="form--button"
//                     onClick={saveTheThing}
//                     > Tithe your Ugly Contribution!
//                         {isEditing ? "Save Changes" : "Save Thing"}
//                     </button>
//         </div>
//         </div>
        
//     )
// }