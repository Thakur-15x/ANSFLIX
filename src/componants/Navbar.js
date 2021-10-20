import React, {useState, useEffect} from 'react'
import logo from '../componants/logo/Logo.png'
import './Nav.css'

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`navbar ${show && "navblack"}`}>
        <img src={logo} alt="" srcSet="" />
        <button className="gener">Sign In</button>
        </div>
        
        
    )
}

export default Navbar
