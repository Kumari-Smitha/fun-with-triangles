import React from "react";
import "./Button.css"

export default function Button(props){
    const {text , handleChange} = props;
    return (
        <>
        <button className="submit-button" onClick={handleChange}>{text}</button>
        </>
    )
}