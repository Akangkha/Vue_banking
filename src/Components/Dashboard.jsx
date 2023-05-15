import React from 'react';
import { Link } from "react-router-dom";
import "./css/s1.css";
function dashboard() {
  return (
    <div className='body1'>
       <div className="b">
    <div className="sidenav">
            <img src="/images/vep1.png" width="22px"/>
            <img src="/images/i11.png" width="22px"/>
            <Link to="/activity" style={{ textDecoration: 'none' }}> <img src="/images/i21.png" width="22px"/></Link>
            <img src="/images/i31.png" width="22px"/>
            <Link to="/account" style={{ textDecoration: 'none' }}> <img src="/images/i41.png" width="22px"/></Link>
            <img src="/images/i51.png" width="22px"/>
            <img src="/images/i61.png" width="22px"/>
    </div>

    <div className="con">
       <div className="head">
        <div className="details">
            <img src="images/Mask Group.png" width="50px" height="50px"/>
            <div className="d">
                <p>Hello, Abhijeet!</p>
                <p id="email11">@abhijeeeeeeet</p>
            </div>
        </div>



        <div className="buttons">
            <div className="button1">
                <img src="images/invoice.png" width="19px"/>
                <p>Send invoice</p>
            </div>
            <div className="button2">
                <img src="images/transfer.png" width="19px"/>
                <p>Transfer</p>
            </div>
        </div>
       </div>


       <div className="main">
        <div className="balance">
                <div className="bal1">
                    <p1>Wallet Balance</p1>
                    <br/>
                    <p2>$0.00</p2>
                </div>
            
            <div className="bal2">
                    <div className="withdraw">WITHDRAW</div>
                    <div className="add">ADD BALANCE</div>
                </div>
        </div>

        <div className="icons">
            <div className="icon1">
            <div className="d1"> <img src="images/w1.png" width="50px" height="50px"/>
                <div className="d">
                    <p>Wallet</p>
                    <p id="email11">USD wallet</p>
                </div>
            </div>
            
            <div className="d1"><img src="images/w2.png" width="50px" height="50px"/>
                <div className="d">
                    <p>Transactions</p>
                    <p id="email11">209 transactions</p>
                </div></div>
            </div>
            <div className="icon2">
            <div className="d1"><img src="images/w3.png" width="50px" height="50px"/>
                <div className="d">
                    <p>Bank accounts</p>
                    <p id="email11">03 Bank accounts</p>
                </div></div>
                <div className="d1">
                    <img src="images/w4.png" width="50px" height="50px"/>
                    <div className="d">
                        <p>Cards</p>
                        <p id="email11">03 cards</p>
                    </div>
                </div>
            </div>
        </div>
       </div>


       <div className="bottom">
        <div className="no">
            <p1 id="email11">No transactions yet!!!</p1>
            <p id="p">Start making payments through Vep and <br/>now you can send Invoice also.</p>
            <div className="buttons1">
                <div className="button2 width">
                    <img src="images/transfer.png" width="19px"/>
                    <p>Transfer</p>
                </div>
                <div className="button1 width">
                    <img src="images/invoice.png" width="19px"/>
                    <p>Send invoice</p>
                </div>
               
            </div>
        </div>


        <div><img src="images/pic7.png" width="300px"/></div>
       </div>
    </div>
    </div>

    </div>
  )
}

export default dashboard
