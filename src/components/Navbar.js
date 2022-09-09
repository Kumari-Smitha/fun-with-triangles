import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar(){
    return (
        <>
        <header className='navbar'>
            <h1>FUN WITH TRIANGLES</h1>
            <nav>
                <span><Link to="/isTriangle" style={{ textDecoration: 'none', color:"white" }}>Is Triangle?</Link></span>
                <span><Link to="/quiz" style={{ textDecoration: 'none', color:"white" }}>Quiz</Link></span>
                <span><Link to="hypotenuse" style={{ textDecoration: 'none', color:"white" }}>Hypotenuse</Link></span>
                <span><Link to="/area" style={{ textDecoration: 'none', color:"white" }}>Area of Triangle</Link></span>
            </nav>
        </header>
        </>
    )
}
