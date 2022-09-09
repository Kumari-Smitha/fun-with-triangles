import React,{useState} from "react";
import Button from "./Button";
import Input from "./Input";
import "./IsTriangle.css";


export default function IsTriangle(){
    const [angle1, setAngle1] = useState(0);
    const [angle2, setAngle2] = useState(0);
    const [angle3, setAngle3] = useState(0);
    const [text, setText] = useState("");
    
    const checktriangle = ()=>{
       let sum = Number(angle1)+Number(angle2)+Number(angle3);
       if(sum === 180){
        setText("Yayy! the angles form a Triangle!")
       }else {
        setText("Oops! the angles does not form a Triangle.")
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
        <p className="p-text">{text}</p>
        
        </div>
        
        </>
    )
}