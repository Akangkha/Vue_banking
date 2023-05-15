import React from 'react'
import "./css/s2.css";
import {Link} from "react-router-dom";
const activity1 = () => {
  window.location.pathname="/activity1"}
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]
function activity() {
  return (
    <div className='all'>
      <span className="sidenav11">
            <img src="/images/vep1.png" width="22px"/>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}> <img src="/images/i12.png" width="22px"/></Link>
            <img src="/images/i22.png" width="22px"/>
            <img src="/images/i31.png" width="22px"/>
            <Link to="/account" style={{ textDecoration: 'none' }}><img src="/images/i41.png" width="22px"/></Link>
            <img src="/images/i51.png" width="22px"/>
            <img src="/images/i61.png" width="22px"/>
    </span>


    <span>
      <span className="activity">
        <p>Activities</p>
        <div className="activitydetails">
        <table>
        
        <tr>
          <th>From/to</th>
          <th>Time & Date</th>
          <th>Account</th>
          <th>Amount</th>
        </tr>
       
        {/* {data.map((val, key) => {
          return (
            <tr key={key}>
              <td onClick={activity1}>{val.name}</td>
              <td onClick={activity1}>{val.age}</td>
              <td onClick={activity1}>{val.gender}</td>
            </tr> 
          )
        })}*/}

        <tr>
          <td><div className="tdy">
          <Link to="/activity2"> <img src="images/Mask Group.png" width="29px" height="29px"></img></Link>
            <td>Processing payment</td></div></td>
          <td>12:00 PM</td>
          <td>to Wallet</td>
          <td id="green">$ 999.00</td>
          
        </tr>
        <tr>
          <td><div className="tdy">
          <Link to="/activity1"> <img src="images/Mask Group.png" width="29px" height="29px"></img></Link>
            <td>Paid to Sai Swaarup</td></div></td>
          <td>12:00 PM</td>
          <td>From ******9876</td>
          <td>$ 999.00</td>
          
        </tr>

        <tr>
          <td><div className="tdy">
           <img src="images/send.png" width="32px" height="32px"></img>
            <td>Added to US wallet</td></div></td>
          <td>12:00 PM</td>
          <td>From ******9876</td>
          <td id="green">$ 999.00</td>
          
        </tr>
      
        <tr>
          <td><div className="tdy">
          <Link to="/activity3"> <img src="images/Mask Group.png" width="29px" height="29px"></img></Link>
            <td>Failed payment to S.</td></div></td>
          <td>25 May</td>
          <td>From ******9876</td>
          <td>$ 999.00</td>
          
        </tr>
        <tr>
        <td><div className="tdy">
            <img src="images/Mask Group.png" width="29px" height="29px"></img>
            <td>Paid to Sai Swarup</td></div></td>
          <td>25 May</td>
          <td>From ******9876</td>
          <td>$ 999.00</td>
          
        </tr>
        <tr>
        <td><div className="tdy">
            <img src="images/Mask Group.png" width="29px" height="29px"></img>
            <td>Paid to Sai Swarup</td></div></td>
          <td>25 May</td>
          <td>From ******9876</td>
          <td id="green">$ 999.00</td>
          
        </tr>
        <tr>
        <td><div className="tdy">
            <img src="images/Mask Group.png" width="29px" height="29px"></img>
            <td>Paid to Sai Swarup</td></div></td>
          <td>25 May</td>
          <td>From ******9876</td>
          <td>$ 999.00</td>
          
        </tr>
        <tr>
        <td><div className="tdy">
            <img src="images/Mask Group.png" width="29px" height="29px"></img>
            <td>Paid to Sai Swarup</td></div></td>
          <td>25 May</td>
          <td>From ******9876</td>
          <td>$ 999.00</td>
          
        </tr>
        <tr>
        <td><div className="tdy">
            <img src="images/Mask Group.png" width="29px" height="29px"></img>
            <td>Paid to Sai Swarup</td></div></td>
          <td>25 May</td>
          <td>From ******9876</td>
          <td id="green">$ 999.00</td>
          
        </tr>
       
        
      </table>
        </div>
      </span>
    </span>
    </div>
  )
}

export default activity
