// import React, { createContext, useState } from "react";  

// const ThemeContext = React.createContext()

// function ThemeProvider({}){
//     const [color, setColor] = useState("dark")

//     const toggleTheme = () => {
//         setColor(prevColor => prevColor === "dark" ? "light" : "dark")
//     }

//     return (
//         <ThemeContext.Provider value ={{
//             color: color,
//             toggleTheme: toggleTheme
//         }}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }

// export {ThemeContext, ThemeProvider}

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    color: 'blue', // Default theme
  });

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      color: prevTheme.color === "dark" ? "light" : "dark"
    }));
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


