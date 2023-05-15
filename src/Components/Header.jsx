import React from 'react'
import "./css/style1.css";
import {Link} from "react-router-dom";

const loginRoute = () => {
    window.location.pathname="/login"}

    const sign1 = () => {
        window.location.pathname="/signup1"}


export default function Header() {
  return (
   <>
  <div className="container">
        <div className="col1">
            <div >
                <div className="hello1">Hello!</div>
                <div className="welcome1"><h2>Welcome.</h2></div>
            </div>

            <div className="img11">
                <img src="./images/pic1.png" width="400px"/>
            </div>
        </div>
        
        <div className="col22">
                <div className="imag22">
                    <img src="./images/pic2.png"/>
                </div>
                <div className="w1">Sign up to Vep.</div>
                <div className="w2">Enter your phone number to register with your <br/>account.</div>
                <div className="tel">
                    <span className="code">
                        <img src="./images/Group.png"/>
                        <span id="telcode">+234</span>
                    </span>
                    <input type="tel" id="phone" name="phone" placeholder="Enter phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div>
                {/* <button type="button">NEXT<img src="./images/Vector.png" width="10px" onClick={loginRoute}/> </button> */}
               <Link to="/signup"> <button type="button" >NEXT<img src="./images/Vector.png" width="10px" /> </button></Link>
                <div className="account11">Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}> <span 
>LOGIN</span></Link></div>
            </div>
    </div>  
 </>
  )
}
