import React from 'react'
import { Link } from "react-router-dom";
import "./css/style4.css";

const sign3 = () => {
    window.location.pathname="/signup3"}

    const color= () => {
    var c=document.getElementById('bb1');
    var pol=document.getElementById('policy');
    if(pol.checked)
    {
    c.style.backgroundColor = "rgba(191, 19, 191, 1)";
    console.log("checked")
    console.log(c);
    c.disabled=false;
    console.log(c.disabled);
  }
  else{
    c.style.backgroundColor = "rgb(139, 139, 139)";
    c.disabled=true;
    console.log("not checked")
    console.log(c)
  }


}




function Signup2(props) {
  const updation=()=>
{
  props.updateMain("3");
  console.log("Yes")
}

  return (
    <div className='every1'>
    
       <div className="head">
        <img id="arrow" src="./images/Vector1.png"/>
        <img id="pic" src="./images/pic2.png" width="100px"/>
    </div>


    <div className="container3">
        <div className="c1">
            <p className="bd">Basic Details</p>
            <p className="bd1">Account will be used by/for:</p>
            <div className="a">
                <span className="a1"><input type="radio" id="acc1" name="account" value="Business"/>
                <label for="acc1">Individual</label>
                </span>
                <span className="a2">
                <input type="radio" id="acc2" name="account" value="Business" checked="checked"/>
                <label for="acc2">Business</label>
                </span>
            </div>
            <p className="bd1"> Set your wallet’s primary currency.</p>
            <select  id="currency">
                <option value="" disabled selected hidden>Select Currency</option>
                <option value="INR">INR</option>
                <option value="EUROS">EUROS</option>
                <option value="DOLLARS">DOLLARS</option>
              </select>

           
                <p className="bd1">Provide all your required details for your account.</p>
                <div><input type="text" className="tel" id="fname" name="fname" placeholder="Enter  your first name"  required/></div>
                <div><input type="text" className="tel" id="lname" name="lname" placeholder="Enter your last name"  required/></div>
                <input type="date" id="birthday" name="birthday" placeholder="Enter your Date of birth (dd/mm/yyyy)"/>
                <br/>
                <select  id="currency">
                    <option value="" disabled selected hidden>Enter your nationality</option>
                    <option value="INR">Indian</option>
                    <option value="EUROS">German</option>
                    <option value="DOLLARS">Americans</option>
                  </select>

        </div>

        <div className="c2">
            <p className="bd1">Provide your business address:</p>
            <div><input type="text" className="tel" id="ad1" name="ad1" placeholder="Address line 1"  required/></div>
            <div><input type="text" className="tel" id="ad2" name="ad2" placeholder="Address line 2"  required/></div>
            <div><input type="text" className="tel" id="street" name="street" placeholder="Street"  required/></div>
            <div><input type="text" className="tel" id="city" name="city" placeholder="City/Town"  required/></div>

            <select  id="State">
                <option value="" disabled selected hidden>State</option>
                <option value="INR">West Bengal</option>
                <option value="EUROS">Maharastra</option>
                <option value="DOLLARS">Andhra pradesh</option>
              </select>

              <br/>
              <select  id="Country">
                <option value="" disabled selected hidden>Country</option>
                <option value="INR">India</option>
                <option value="EUROS">Germany</option>
                <option value="DOLLARS">Brazil</option>
              </select>

              <div><input type="text" className="tel" id="pin" name="pin" placeholder="Pin-code"  required/></div>
        </div>
    </div> 

    <div className="foot">
        
        <span className="account1"><input type="checkbox" id="policy" name="terms" value="yes" recquired onClick={color}/>I have read and I agree to the <span>Terms and Conditions </span> and the <span>Privacy Policy.</span></span>
        <button type="button"  id="bb1" onClick={() => props.updateMain("3")} disabled >NEXT<img src="./images/Vector.png" width="10px"/> </button>
     </div>
    
     {/* onClick={() => props.updateMain("3")}  */}
    </div>
  )
}

export default Signup2
