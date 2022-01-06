import React, { useState, useEffect } from "react";
import logo from "../componants/logo/Logo.png";
import "./Nav.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const openForm = () => {
    document.getElementById("fom").style.display = "block";
  }
  
  const closeForm = () => {
    document.getElementById("fom").style.display = "none";
  }


  return (
    <div className={`navbar ${show && "navblack"}`}>
      <img src={logo} alt="" srcSet="" />
      <button className="gener" onClick={openForm}>LOGIN</button>
      <div id="fom" className="forme">
      <label htmlFor="show" className="close-btn" title="close" onClick={closeForm}>×</label>
        <h2>WELCOME</h2>
        <form action="/">
            <label>Email or Phone</label>
            <input type="text"/>
            <label>Password</label>
            <input type="password"/>
            <a href="/">Forgot Password?</a>
            <button>Submit</button>
            <div className="link">Not a member? <a href="/">Sigup here</a></div>
            
        </form>
        </div>

     
</div>
  );
}

export default Navbar;
