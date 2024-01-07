import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./Button.css";

interface Props {
    stateProp: "off" | "on";
    size: "small" | "medium" | "large";
}

export const Slider = ({ stateProp, size}: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        state: stateProp || "off",
    });

    return (
        <div className={`${size}-slider ${state.state}`} onClick={() => {dispatch("click");}}>
            <div className={`${size}-ellipse`} />
        </div>
    );
};

function reducer(state: any, action: any) {
    if (state.state === "off") {
        switch (action) {
            case "click":
                return {
                    state: "on",
                };
        }
    }

    if (state.state === "on") {
        switch (action) {
            case "click":
                return {
                    state: "off",
                };
        }
    }

    return state;
}

Slider.propTypes = {
    stateProp: PropTypes.oneOf(["off", "on"]),
};