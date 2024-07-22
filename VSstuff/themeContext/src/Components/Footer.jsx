import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

function Footer(props) {
    const {color} = useContext(ThemeContext)
    return(
        <div className={`${color}-theme`}>
            <h3>I'm the footer. Hello! YOU CLICKED THE BUTTON! TURN IT BACK!</h3>
        </div>
    )
}

export default Footer

