import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";


function Navbar(props) {
    const {color} = useContext(ThemeContext)

    return(
    <div className={`${color}-theme`}>
        <h1>I'm the glorious Navigation bar! Don't click that button!</h1>
    </div>    
    )
}

export default Navbar

// import React from 'react';

// function Navbar({ theme }) {
//   if (!theme) {
//     return null;
//   }

//   // Use theme as needed
//   const { primaryColor } = theme;

//   return (
//     <nav style={{ backgroundColor: primaryColor }}>
//       Hi! I'm probably the weirdest Nav Bar you've ever seen! DON'T CLICK THE BUTTON!!
//     </nav>
//   );
// }

// export default Navbar;
