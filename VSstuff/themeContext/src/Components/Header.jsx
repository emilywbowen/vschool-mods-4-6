import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

function Header(props) {
    const {color} = useContext(ThemeContext)

    return(
        <div className={`${color}-theme`}>
            <h2>I'm the Header. Hi, User! You should not click the button....</h2>
        </div>
    )
}

export default Header


