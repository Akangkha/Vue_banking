import React from "react";
import "./css/style2.css";
import { Link } from "react-router-dom";

const sign = () => {
    window.location.pathname="/"}

function Login() {
  return (
    <>
      <div className="container1">
        
        <div className="col1">
          <div>
            <div className="hello">Hey!</div>
            <div className="welcome1">
              <h2>Welcome back.</h2>
            </div>
          </div>

          <div className="img1">
            <img src="./images/pic3.png" width="400px" />
          </div>
        </div>

        <div className="col2">
          <div className="imag22">
            <img src="../images/pic2.png" />
          </div>
          <div className="w1">Login into you account.</div>
          <div className="w2">Enter your registered email ID and password.</div>
          <div className="tel">
            <img src="../images/em.png" width="14px" />
            <input
              type="email"
              id="phone"
              name="phone"
              placeholder="Enter email ID"
              required
            />
          </div>
          <div className="tel">
            <img src="./images/ps.png" width="13px" />
            <input
              type="password"
              id="pass"
              name="phone"
              placeholder="Set password"
              required
            />
          </div>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}> <button type="button">
            LOGIN
            <img src="./images/Vector.png" width="10px" />{" "}
          </button></Link>
          <div
            className="account11"           
          >
            Forgot password? <span>RESET PASSWORD</span>
          </div>
          <div className="account11">
            Don't have an account? <Link to="/" style={{ textDecoration: 'none' }}><span onClick={sign}>SIGN UP</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
