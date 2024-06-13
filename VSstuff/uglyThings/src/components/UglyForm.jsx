import React, {useContext} from "react";
// import { ThemeContext } from "./ThemeProvider";  ~~ need to fix the name

export default function UglyForm() {
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Title"
                    // className="form--input"
                    name="title"
                    value={thing.title}
                    onChange={handleChange}
                />

                <input
                   type="text"
                   placeholder="Description"
                   // className="form--input"
                   name="description"
                   value={thing.description}
                   onChange={handleChange}
                />

                <input
                   type="text"
                   placeholder="URL of image"
                   // className="form--input"
                   name="imgUrl"
                   value={thing.title}
                   onChange={handleChange}
                />  

                
            </div>
        </main>
        
    )
}