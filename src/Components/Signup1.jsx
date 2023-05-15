import React from 'react'

import { Link } from "react-router-dom";
import "./css/style3.css";
import { Button } from '@mui/material';
const sign2 = () => {
    window.location.pathname="/signup2";
    }


// // function sign2() {
// //    return <Signup2/>   
// // }
 function Signup1 (props) {

//     // const [divOrder, setDivOrder] = useState(['container', 'every1']);
//     // function swapDivs() {
//     //     console.log("DOne")
//     //     console.log(every1)
//     //     setDivOrder(divOrder.reverse());
//     <Signup2/>
//       }

      
  return (
   
    
    <>
    <div className="container">
            
        <div className="col1">
            <div >
                <div className="hello1">Lets</div>
                <div className="welcome1"><h2>Secure your login process.</h2></div>
            </div>

            <div className="img1">
                <img src="./images/pic3.png" width="400px" />
            </div>
        </div>
        
        <div className="col2">
                <div className="imag22">
                    <img src="./images/pic2.png"/>
                </div>
                <div className="w1">Create new login creentials.</div>
                <div className="w2">Enter your email ID to register your account and set a <br/><br/>password.</div>
                <div className="tel">
                    <img src="./images/em.png" width="14px"/>
                   <input type="email" id="phone" name="phone" placeholder="Enter email ID"  required/>
                </div>
                <div className="tel">
                    <img src="./images/ps.png" width="13px"/>
                    <input type="password" id="pass" name="phone" placeholder="Set password"  required/></div>
                    <div className="tel">
                        <img src="./images/ps.png" width="13px"/>
                        <input type="password" id="pass1" name="phone" placeholder="Confirm password"  required/></div>
                          <button type="button" onClick={() => props.updateMain("1")}>NEXT<img src="./images/Vector.png" width="10px" /> </button>
               
                
            </div>
    </div>
    </>

  

  )

 }

export default Signup1
