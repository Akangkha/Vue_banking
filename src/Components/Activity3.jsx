import React from 'react';
import "./css/s4.css";
import {Link} from "react-router-dom";

function activity1() {
  return (
    <div className='dj'>
 <span className="sidenav1">
            <img src="/images/vep1.png" width="22px"/>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}><img src="/images/i12.png" width="22px"/></Link>
            <Link to="/activity" style={{ textDecoration: 'none' }}> <img src="/images/i21.png" width="22px"/></Link>
            <img src="/images/i31.png" width="22px"/>
            <Link to="/account" style={{ textDecoration: 'none' }}> <img src="/images/i42.png" width="22px"/></Link>
            <img src="/images/i51.png" width="22px"/>
            <img src="/images/i61.png" width="22px"/>
    </span>


    <div className="container10">
      <div className="hh1"><p>Activities</p>
        <div className="hb">
          <div className="hb1">
            <img src="/images/help.png" width="16px"></img>
            <po>Help</po>
          </div>
          <div className="hb2">
          <img src="/images/share.png" width="16px"></img>
            <po>Share</po>
          </div>
        </div>
      </div>
     
     <div className="hh2">
     <table id="table">
        
        <tr >
            <td>
                <div className="tdd">
                    <div className="tdd1">Transaction ID: <b>VE123445DSAD123</b><img src="images/copy.png"/></div>
                    <div className="tdd2">12:00 PM, 2nd Feb 2022</div>
                </div>
            </td>
            <td></td>
            <td id="abcde"> <img src="images/failed.png"></img>Failed</td>
        </tr>
        <tr className='tr'>
          <th>Paid to @saiswarupchakra</th>
          <th>To</th>
          <th>Amount paid</th>
        </tr>
       
  
            <tr >
              <td><img src="images/mg.png" width="30"></img>Sai Swarup Chakra</td>
              <td>$ USD Wallet</td>
              <td>$ 999.00</td>
            </tr>

          <tr className='tr'>
            <th>Message</th>
            
          </tr>
          <td>Bussiness dealings</td>
      </table>
     </div>

    </div>
    </div>
  )
}

export default activity1
