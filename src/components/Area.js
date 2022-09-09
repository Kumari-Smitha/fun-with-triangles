import React,{useState} from "react";
import "./Area.css";
import Input from "./Input";
import Button from "./Button";

export default function Area(){
    const [side1, setSide1] = useState(0);
    const [side2, setSide2] = useState(0);
    const [side3, setSide3] = useState(0);
    const [text, setText] = useState("");
    const [error, setError] = useState(null)

    const calculateArea = ()=>{
        if( side1 !== 0 && side2 !== 0 && side3 !== 0){

            setError(null)
            const firstSide = Number(side1);
            const secondSide = Number(side2);
            const thirdSide = Number(side3);

            if((firstSide+secondSide > thirdSide) && (secondSide+thirdSide > firstSide) && (firstSide+thirdSide > secondSide)){
                const semiperimeter = (firstSide+secondSide+thirdSide)/2;
                const result = Math.sqrt(
                    semiperimeter *
                    (semiperimeter - firstSide) *
                    (semiperimeter - secondSide) *
                    (semiperimeter - thirdSide)
                ).toFixed(4);
                setText("Area of a triangle using heron's formula is "+ result+" units");

            }else{
                setText("Enter valid side lengths such that each side lengths")
                
            }
        } else {
            setError("Please Enter all the 3 side lengths")
        }

    }
    return(
        <>
        
        <div className="area">
        <h1>Calculate Area of a triangle</h1>
        <Input label="Enter first side of a triangle" handleChange={(e)=>setSide1(e.target.value)}/>
        <Input label="Enter second side of a triangle" handleChange={(e)=>setSide2(e.target.value)}/>
        <Input label="Enter third side of a triangle" handleChange={(e)=>setSide3(e.target.value)}/>
        <Button text="Calculate" handleChange={calculateArea}/>
        {/* <button onClick={calculateArea}>Calculate</button> */}
        {error ? <p style={{color:"red"}}>{error}</p> :<p className="p-text">{text}</p>}
        </div>
        
        </>
    )
}