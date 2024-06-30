import React, { useState } from "react";
import "./EntryLogin.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function EntryLogin(props) {


  const[user_name,setemail]=useState("");
const[user_password,setpassword]=useState("");

   const onSubmitform = async(e)=>{
      e.preventDefault();
      try {
        const body = {user_name, user_password };
        const response = await fetch(
          "http://localhost:5000/authentication/busilogi",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
  
        const parseRes = await response.json();
        if (parseRes.token) {
         localStorage.setItem("token", parseRes.token);
         props.setAuth(true);
         toast.success("Logged in Successfully");
       } else {
         props.setAuth(false);
         toast.error(parseRes);
       }
  
     
        
       
      } catch (err) {
        console.error(err.message);
      }
    };

  return (
    <div className="hex">
   

      <div class="login-form" style={{marginTop:"6em"}}>
        <div class="text" onClick={props.logged}>
          -BPortalLOGIN-
        </div>
        <form>
          <div class="field">
            <div class="fas fa-envelope"></div>
            <input type="email" placeholder="Email or Phone" value={user_name} onChange={e=> setemail(e.target.value)} required />
          </div>
          <div class="field">
            <div class="fas fa-lock"></div>
            <input type="password" placeholder="Password"  value={user_password} onChange={e=> setpassword(e.target.value)} required/>
          </div>

            <button onClick={onSubmitform} >LOGIN</button>
  
         
        </form>
        <Link class="nav-link" to="/Join" style={{ color: "red" }}>
          Join our team now - click here
        </Link>
      </div>
  </div>
  );
}

export default EntryLogin;
