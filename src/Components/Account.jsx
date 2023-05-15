import React from 'react'
import "./css/s3.css";
import {Link} from "react-router-dom";



function account() {
  return (
    <div className='all1'>
        <span className="sidenav1">
            <img src="/images/vep1.png" width="22px"/>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}><img src="/images/i12.png" width="22px"/></Link>
            <Link to="/activity" style={{ textDecoration: 'none' }}> <img src="/images/i21.png" width="22px"/></Link>
            <img src="/images/i31.png" width="22px"/>
            <Link to="/account" style={{ textDecoration: 'none' }}> <img src="/images/i42.png" width="22px"/></Link>
            <img src="/images/i51.png" width="22px"/>
            <img src="/images/i61.png" width="22px"/>
    </span>

    <div className="bar">
      <div className="i">
        <img src="/images/group2.png" width="50px"></img>
        <br/>
        <p3>Abhijeet Mohapatra</p3>
        <br/>
        <p1 >@abhijeeeeeeet</p1>
      </div>

     <div className="line"></div>

      <div className="i1 i11">
      <img src="/images/a1.png" height="16px"></img> 
      <p>My details</p>
      </div>


      <div className="i1">
      <img src="/images/a2.png" height="16px"></img>
      <p>My bank accounts</p>
      </div>


      <Link to="/bank" style={{ textDecoration: 'none' }}><div className="i1">
      <img src="/images/a3.png" height="16px"></img>
      <p>My cards</p>
      </div></Link>


      <div className="i1">
      <img src="/images/a4.png" height="16px"></img>
      <p>Security</p>
      </div>

      <div className="i1">
      <img src="/images/a5.png" height="16px"></img>
      <p>Help</p>
      </div>
    <div className="line"></div>
      
      <div className="i1">
      <img src="/images/a6.png" height="16px"></img>
      <p>Legals</p>
      </div>

      
      <div className="i1">
      <img src="/images/a7.png" height="16px"></img>
      <p>About vep</p>
      </div>


    </div>



    <div className="containeracc">
      <div className="logcred">
        <p>Log in credentials</p>
        <br></br>
        <p11>Phone number</p11>
        <br></br>
        <p12>+234 1234567890</p12>
        <br></br>
        <p11>Email ID</p11>
        <br></br>
        <p12>abhijeetmohapatra@gmail.com</p12>
        <br></br>
        <br></br>
        <p32>Change password</p32>
      </div>
      <div className="basd">
        <br></br>
        <br></br>
        <p>Basic details</p>
        <p12>Abhijeet Mohapatra</p12>
        <br></br>
        <p11>Date of birth:</p11> <p1212>11/11/2023</p1212>
        <br></br>
        <p11>Nationality:</p11> <p1212>Indian</p1212>
      </div>
      <div className="busd">
        <br></br>
        <br></br>
        <p>Business Details</p>
        <div className="pw"><p11>eLitmus<br></br>Private Limited<br></br>Primary Currency: USD<br></br>307, B block, Habitat Green apartment, <br></br>Lane 7c,
751031</p11></div>
      </div>
    </div>
    </div>
  )
}

export default account
