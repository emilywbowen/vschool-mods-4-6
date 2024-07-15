import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ContextProvider({children}){
    const [theme, setTheme] = useState({
        color:"light"
    });

    const toggleTheme = () => {
        setTheme(prevTheme =>({
            color: prevTheme.color === "dark" ? "light" :"dark"
        }))
    }

return (
    <Context.Provider value={{
        ...theme,
        toggleTheme
    }}>
        {children}
    </Context.Provider>
);
}
