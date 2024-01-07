import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import "./Button.css";

type FooterProps = {
    stateProp: string,
    toggleThemeState: (e: React.MouseEvent, state: string) => void;
}


export const Slider: React.FC<FooterProps> = (props) => {
    const [state, setState] = useState(props.stateProp);
    function toggleState(e: React.MouseEvent) {
        if(state === "on") {
            props.toggleThemeState(e, "light")
            setState("off")
        } else {
            props.toggleThemeState(e, "dark")
            setState("on")
        }
      }

    return (
        <div className={`slider ${state}`} onClick={(e) => {toggleState(e);}}>
            <div className={`ellipse`}>
                {state === "off"
                    ? <FontAwesomeIcon icon={faSun} size="lg"/>
                    : <FontAwesomeIcon icon={faMoon} size="lg" inverse/>
                }
            </div>
        </div>
    );
};
