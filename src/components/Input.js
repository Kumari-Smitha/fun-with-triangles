import React from "react";
import "./Input.css"

export default function Input(props){
    const {handleChange, label} = props;
    return (
        <>
        {/* <div className="input-label"> */}
        <label className="input-label">{label}</label>
        <input className="input-input" onChange={handleChange} type="number"/>
        {/* </div> */}
        </>
    )
}