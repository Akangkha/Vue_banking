import React from "react";

// import './App.css';

import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup1 from "./Components/Signup1";
import Signup2 from "./Components/Signup2";
import Signup3 from "./Components/Signup3";
import Signup4 from "./Components/Signup4";
import Success from "./Components/Success";
import Dashboard from "./Components/Dashboard";
import Activity from "./Components/Activity";
import Activity1 from "./Components/Activity1";
import Activity2 from "./Components/Activity2";
import Activity3 from "./Components/Activity3";
import Signup from "./Components/Signup";
import Account from "./Components/Account";
import Bank from "./Components/Bank";



import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
// import "./Components/css/style1.css";

function App() {
  {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="login" element={<Login />} />

            
            {/* <Route path="signup1" element={<Signup1/ >} > </Route> */}
               {/* <Route path="signup2" element={<Signup2 />} />
               <Route path="signup3" element={<Signup3 />} />
                <Route path="signup4" element={<Signup4 />} /> */}
      
            <Route path="success" element={<Success />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="activity" element={<Activity />} />
            <Route path="activity1" element={<Activity1 />} />
            <Route path="activity2" element={<Activity2 />} />
            <Route path="activity3" element={<Activity3 />} />
            <Route path="account" element={<Account />} />          
            <Route path="bank" element={<Bank />} />          
           
                   
          </Routes>
        </Router>
      </>
    );
  }
}


export default App;
