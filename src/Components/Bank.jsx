import React from 'react'
import {Link} from "react-router-dom";
import "./css/s5.css";
function bank() {
  return (
    <div className='bank1'>
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

     <Link to="/account" style={{ textDecoration: 'none' }}><div className="i1">
      <img src="/images/a1.png" height="16px"></img> 
      <p>My details</p>
      </div></Link>


      <div className="i1">
      <img src="/images/a2.png" height="16px"></img>
      <p>My bank accounts</p>
      </div>


      <div className="i1 i11">
      <img src="/images/a3.png" height="16px"></img>
      <p>My cards</p>
      </div>


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


    <div className="photo">
        <div className="cards1">
            <f>Cards</f>
            <p>No cards added yet!<br></br>Link a card now to enable account features.</p>

        </div>
        <div className="cards">
            <img src="./images/background.png" width="650px"></img>
        </div> 

        <Link to="/card" style={{ textDecoration: 'none' }}> <button type="button"  id="plus" ><img src="./images/plus.png" width="10px"/> LINK A CARD</button>
</Link>
    </div>
    </div>

  )
}

export default bank