import React from 'react'
import { Link } from "react-router-dom";
import "./css/style5.css";

const sign4 = () => {
    window.location.pathname="/signup4"}


function Signup3(props) {
  return (
    <>

    <div className="imag2">
        <img src="./images/vue1.png"/>
    </div>
    <div className="container6">
        <div className="col1">
            <div >
                <div className="hello">Few</div>
                <div className="welcome"><h2>Steps remaining.</h2></div>
            </div>

            <div className="img111">
                <img src="./images/pic4.png" width="400px"/>
            </div>
        </div>
        
        <div className="col2">
                
                <div className="w1">Business details</div>
                <div className="w2">Provide your required business details for your <br/>account.</div>
                <div className="tel">
                <div><input type="text"  id="cname" name="fname" placeholder="Enter  your company name"  required/></div>

                </div>
                <select  id="currency">
                    <option value="" disabled selected hidden>Select business type</option>
                    <option value="sb">Small business</option>
                    <option value="corporation">Corporations</option>
                    <option value="franchise">Franchise</option>
                  </select>
               <button type="button" onClick={() => props.updateMain("3")} >NEXT<img src="./images/Vector.png" width="10px"/> </button>
                
            </div>
    </div>
    </>
     
     );
   }
   
   export default Signup3