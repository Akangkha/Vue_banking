import React from 'react'
import { Link } from "react-router-dom";
import "./css/style5.css";

const success = () => {
    window.location.pathname="/success"}


function Signup4(props) {
  return (
    <>
    <div className="imag2">
        <img src="./images/vue1.png"/>
    </div>
    <div className="container6">
        
        <div className="col1">
            <div >
                <div className="hello">Let's!</div>
                <div className="welcome"><h2>Get Started!</h2></div>
            </div>

            <div className="img1" >
                <img src="./images/pic5.png" width="400px"/>
            </div>
        </div>
        
        <div className="col2">
                
                <div className="w1">Set up your username</div>
                
                <div className="tel">
                <span className="prefix">vep.me/</span>
                <span><input type="text"  id="cname" name="fname" placeholder="Enter  username"  required/></span>

                </div>
                <p className="account121">This will be the unique name using which other users can <br/>find and pay you.</p>
              <Link to="/success"><button type="button" >PROCEED<img src="./images/Vector.png" width="10px"/> </button></Link>
                
            </div>
    </div>

</>
     
     );
   }
   
   export default Signup4