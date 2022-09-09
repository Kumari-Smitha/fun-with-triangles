import React,{useState} from "react";
import "./Quiz.css";
import Button from "./Button";

export default function Quiz(){
    const [count, setCount] = useState(null);
    const [questions, setQuestions] = useState({
        ques1 : "",
        ques2 : "",
        ques3 : "",
        ques4 : "",
        ques5 : "",
        ques6 : "",
        ques7 : "",
        ques8 : "",
        ques9 : "",
        ques10 : ""
    })
    const [error, setError] = useState(null)

    const answers = ["90",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100",
    "30",
    "a + b + c",
    "no",
    "45"];

    const checkAnswers = (e)=>{
        e.preventDefault();
        Object.values(questions).map(val =>{return (val ==='') ? setError("Please select all the answers.") : setError(null)})
           
        console.log(Object.values(questions))
        let userAnswers = [];
        Object.values(questions).forEach(val=>userAnswers.push(val))
        for(let i in answers){
            for(let j in userAnswers){
                if(i===j){
                    if(answers[i] === userAnswers[j]){
                        setCount((p)=>p+1)
                    }
                }
            }
        }
    }
    return(
        <>
        
        <div className="quiz">
        <h1>Quiz on triangles</h1>
        <h3>For each correct answer you will get 1 point</h3>
        <form>
            <div className="question">
                <p>What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?</p>
                <input type="radio" name="ques1" value="45" onChange={(e)=>setQuestions({...questions, ques1:e.target.value})}/>
                <label>45°</label>
                <input type="radio" name="ques1" value="90" onChange={(e)=>setQuestions({...questions, ques1:e.target.value})}/>
                <label>90°</label>
                <input type="radio" name="ques1" value="60" onChange={(e)=>setQuestions({...questions, ques1:e.target.value})}/>
                <label>60°</label>
            </div>
            <div className="question">
            <p>What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?</p>
            <input type="radio" name="ques2" value="obtuse" onChange={(e)=>setQuestions({...questions, ques2:e.target.value})}/>
            <label>obtuse </label>
            <input type="radio" name="ques2" value="acute" onChange={(e)=>setQuestions({...questions, ques2:e.target.value})}/>
            <label>acute </label>
            <input type="radio" name="ques2" value="right angled" onChange={(e)=>setQuestions({...questions, ques2:e.target.value})}/>
            <label>right angled</label>
            </div>
            
            <div className="question">
            <p>A triangle can have</p>
            <input type="radio" name="ques3" value="one right angled" onChange={(e)=>setQuestions({...questions, ques3:e.target.value})}/>
            <label>one right angle </label>
            <input type="radio" name="ques3" value="two right angled" onChange={(e)=>setQuestions({...questions, ques3:e.target.value})}/>
            <label>two right angles </label>
            </div>
            <div className="question">
            <p>Which of the following can form a right angled triangle?</p>
            <input type="radio" name="ques4" value="14, 15, 26" onChange={(e)=>setQuestions({...questions, ques4:e.target.value})}/>
            <label>14, 15, 26 </label>
            <input type="radio" name="ques4" value="12, 16, 20" onChange={(e)=>setQuestions({...questions, ques4:e.target.value})}/>
            <label>12, 16, 20 </label>
            </div>
            <div className="question">
            <p>Which of the following triangles are always similar?</p>
            <input type="radio" name="ques5" value="Equilateral triangle" onChange={(e)=>setQuestions({...questions, ques5:e.target.value})}/>
            <label>Equilateral triangle </label>
            <input type="radio" name="ques5" value="Isosceles triangle" onChange={(e)=>setQuestions({...questions, ques5:e.target.value})}/>
            <label>Isosceles triangle</label>
            </div>
            <div className="question">
            <p>If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?</p>
            <input type="radio" name="ques6" value="100" onChange={(e)=>setQuestions({...questions, ques6:e.target.value})}/>
            <label>100°</label>
            <input type="radio" name="ques6" value="85" onChange={(e)=>setQuestions({...questions, ques6:e.target.value})}/>
            <label>85°</label>
            </div>
            <div className="question">
            <p>If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?</p>
            <input type="radio" name="ques7" value="30" onChange={(e)=>setQuestions({...questions, ques7:e.target.value})}/>
            <label>30°</label>
            <input type="radio" name="ques7" value="10" onChange={(e)=>setQuestions({...questions, ques7:e.target.value})}/>
            <label>10°</label>
            </div>
            <div className="question">
            <p>The perimeter of scalene triangle with sides a, b, c is</p>
            <input type="radio" name="ques8" value="a + b + c" onChange={(e)=>setQuestions({...questions, ques8:e.target.value})}/>
            <label>a + b + c</label>
            <input type="radio" name="ques8" value="2a" onChange={(e)=>setQuestions({...questions, ques8:e.target.value})}/>
            <label>2a</label>
            <input type="radio" name="ques8" value="None of these" onChange={(e)=>setQuestions({...questions, ques8:e.target.value})}/>
            <label>None of these</label>
            </div>
            <div className="question">
            <p>A scalene triangle has ___ lines of symmetry</p>
            <input type="radio" name="ques9" value="two" onChange={(e)=>setQuestions({...questions, ques9:e.target.value})}/>
            <label>two</label>
            <input type="radio" name="ques9" value="no" onChange={(e)=>setQuestions({...questions, ques9:e.target.value})}/>
            <label>no</label>
            <input type="radio" name="ques9" value="15" onChange={(e)=>setQuestions({...questions, ques9:e.target.value})}/>
            <label>15</label>
            </div>
            <div className="question">
            <p>There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?</p>
            <input type="radio" name="ques10" value="85" onChange={(e)=>setQuestions({...questions, ques10:e.target.value})}/>
            <label>85°</label>
            <input type="radio" name="ques10" value="65" onChange={(e)=>setQuestions({...questions, ques10:e.target.value})}/>
            <label>65°</label>
            <input type="radio" name="ques10" value="45" onChange={(e)=>setQuestions({...questions, ques10:e.target.value})}/>
            <label>45°</label>
            </div>
            
            {/* <button onClick={(e)=>checkAnswers(e)}>Submit Answers</button> */}
            <Button text="Submit Answers"  handleChange={(e)=>checkAnswers(e)}/>
        </form>
        {error ? <p style={{color:"red"}}>{error}</p> : 
        (count && <p style={{marginTop:"0.5rem",fontWeight:"bold",fontSize:"X-large", color:"#ff0055"}}>Your total score is {count}</p>)
        }
        
        </div>
        
        </>
    )
}