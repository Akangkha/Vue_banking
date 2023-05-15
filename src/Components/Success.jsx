
import React from 'react'
import { Link } from "react-router-dom";
import "./css/style6.css";

const onLogin = () => {
    window.location.pathname="/login"}

function success() {
  return (
    <>     
    <div>
       <div class="imag2">
        <img src="./images/vue1.png"/>
    </div>
    <div class="container7">
        <h2>Account created successfully!!!</h2>
        <p class="write">You can login to your account through the credentials created.</p>
        <Link to="/login"  style={{ textDecoration: 'none' }}><div class="ln"> <span  onClick={onLogin}>LOGIN NOW</span></div></Link>
        <div class="img2"><img src="./images/pic6.png" width="240px"/></div>
        <div>
            <span><img src="./images/exc.png" id="icon"/></span>
            <span class="write">Account verification is pending, you can verify your account through the mail sent to your email.</span>
        </div>      
    </div>
    </div>
    <p></p>
    </>
  );
}

export default success
