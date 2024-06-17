import React, { useContext } from 'react';
import { Context } from './ContextProvider';

function ThingsList() {
  const { allThings, deleteThing, editThing } = useContext(Context);

  return (
    <div>
      {allThings.map(thing => (
        <div key={thing._id} className="thing">
          <h2 className='thing--textTitle'>{thing.title}</h2>
          <p className='thing--textDescription'>{thing.description}</p>
          <img src={thing.imgUrl} alt={thing.title} className='thing--image' />
          <button onClick={() => editThing(thing._id)}>Edit</button>
          <button onClick={() => deleteThing(thing._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ThingsList;


// Code wasn't working, so I asked chatGPT for help editing, deleting, and posting to the api. Below is the original code that worked to bring in the API, but not to update the api.
// import React, {useContext} from "react";
// import { Context } from "./ContextProvider";


// export default function Thing() {
//     const {allThings, setAllThings, isEditing, setIsEditing, formData, setFormData, editingId, setEditingId, handleChange, saveTheThing, editThing} = useContext(Context)

//     return (
//         <div>
//             <div className="thing">
//             <img src={formData.data} className="thing--image" alt="thing"/>
//             <h2 className="thing--textTitle">{formData.title}</h2>
//             <h2 className="thing--textDescription">{formData.description}</h2>
//             <img src = {formData.imgUrl} className="thing--image" />
//         </div>

//         <div className="thing">
//             {allThings.map((savedThing)=> (
//                 <div key={savedThing._id} className="thing-item">
//                     <h2 className="thing--textTitle">{savedThing.title}</h2>
//                     <h2 className="thing--textDescription">{savedThing.description}</h2>
//                     <img src = {savedThing.imgUrl} className="thing--image" />
//                     <button className="edit" onClick={() => editThing(savedThing._id)}>Edit</button>
//                     </div>
//             )
//             )}
//         </div> 
//         </div>
//         // what to return....
//     )
// }




 