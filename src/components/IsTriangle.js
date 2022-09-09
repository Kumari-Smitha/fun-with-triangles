import React,{useState} from "react";
import Button from "./Button";
import Input from "./Input";
import "./IsTriangle.css";


export default function IsTriangle(){
    const [angle1, setAngle1] = useState(0);
    const [angle2, setAngle2] = useState(0);
    const [angle3, setAngle3] = useState(0);
    const [text, setText] = useState("");
    const [error, setError] = useState(null)
    
    const checktriangle = ()=>{
      
        if(angle1 !== 0 && angle2 !== 0 && angle3 !== 0){
            setError(null)
            let sum = Number(angle1)+Number(angle2)+Number(angle3);
            if(sum === 180){
                setText("Yayy! the angles form a Triangle!")
            }else {
                setText("Oops! the angles does not form a Triangle.")
            }
        } else {
            setText("")
            setError("Please enter all the 3 angles!")
        }
    }
    return(
        <>
        
        <div className="is-triangle">
        <h1>Angles of triangles</h1>
        
        <Input label="Angle 1" handleChange={(e)=>setAngle1(e.target.value)} />
      
        <Input label="Angle 2" handleChange={(e)=>setAngle2(e.target.value)} />
        
        <Input label="Angle 3" handleChange={(e)=>setAngle3(e.target.value)} />
        <Button text="Is Triangle?" handleChange={checktriangle}/>
        {error ? <p style={{color:"red"}}>{error}</p> : <p className="p-text">{text}</p>}
        
        
        </div>
        
        </>
    )
}