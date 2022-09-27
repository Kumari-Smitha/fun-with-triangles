import React,{useState} from "react";
import Input from './Input';
import Button from "./Button"
import "./Hypotenuse.css";

export default function Hypotenuse(){
    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);
    const [text2, setText] = useState("")
    const [error, setError] = useState(null)
   
    const calculateHypotenuse = ()=>{
        setError(null)
        if(  Number(base) > 0 && Number(height) > 0){
            setError(null)
            let formula = Math.sqrt((base**2)+(height**2))
            setText("The length of hypotenuse is "+ formula)
        } else if(base === 0 || height === 0){
            setError(null)
            setError("Please enter both values!")
        }else {
            setError(null)
            setError("Please enter values greater than 0")
        }
    }
    return(
        <>
        
        <div className="hypotenuse">
        <h1>Calculate Hypotenuse of a triangle</h1>
        
        <Input label="Enter base value (a) =" handleChange={(e)=>setBase(e.target.value)}/>
        <Input label="Enter height value (b) =" handleChange={(e)=>setHeight(e.target.value)}/>
        <Button text="Calculate hypotenuse" handleChange={calculateHypotenuse}/>
        {error?<p style={{color:"red"}}>{error}</p>:<p className="p-text">{text2}</p>}
        <h3>Hypotenuse formula : √(base² + height²)</h3>
        
        
        </div>
        
        </>
    )
}