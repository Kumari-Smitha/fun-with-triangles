import React,{useState} from "react";
import Input from './Input';
import Button from "./Button"
import "./Hypotenuse.css";

export default function Hypotenuse(){
    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);
    const [text2, setText] = useState("")
   
    const calculateHypotenuse = ()=>{
        let formula = Math.sqrt((base**2)+(height**2))
        setText("The length of hypotenuse is "+ formula)
        
    }
    return(
        <>
        <div className="hypotenuse">
        <h1>Calculate Hypotenuse of a triangle</h1>
        
        <Input label="Enter base value (a) =" handleChange={(e)=>setBase(e.target.value)}/>
        <Input label="Enter height value (b) =" handleChange={(e)=>setHeight(e.target.value)}/>
        <Button text="Calculate hypotenuse" handleChange={calculateHypotenuse}/>
        <p className="p-text">{text2}</p>
        <h2>Hypotenuse formula</h2>
        <h3>√(base² + height²)</h3>
        
        </div>
        
        </>
    )
}