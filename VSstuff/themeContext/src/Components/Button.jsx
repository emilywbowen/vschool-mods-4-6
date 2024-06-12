// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeProvider";

// function Button(props){
//     const {color, toggleTheme} = useContext(ThemeContext)

//     return (
//         <button onClick={toggleTheme} className={`${color}-theme`}>Bad Button</button>
//     );
// }

// export default Button

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function Button(props) {
    const { color, toggleTheme } = useContext(ThemeContext);

    const handleClick = () => {
        toggleTheme();
    };

    return (
        <button className={`${color}-theme`} onClick={handleClick}>
            Bad Button!
        </button>
    );
}

export default Button;
