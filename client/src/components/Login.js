import React, { useState ,useEffect,Fragment, Outlet } from "react";
import './Login.css'
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


function Login(props) {
const[user_email,setemail]=useState("");
const[user_password,setpassword]=useState("");

   const onSubmitform = async(e)=>{
      e.preventDefault();
      try {
        const body = {user_email, user_password };
        const response = await fetch(
          "http://localhost:5000/authentication/login",
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
    <Fragment>


   <div className="hex">

   <div class="login-form" style={{marginTop:"6em"}}>
      <div class="text" >
         -LOGIN-
      </div>
      <form >
         <div class="field">
            <div class="fas fa-envelope"></div>
            <input type="text" placeholder="Email or Phone" value={user_email} onChange={e=> setemail(e.target.value)} required/>
         </div>
         <div class="field">
            <div class="fas fa-lock"></div>
            <input type="password" placeholder="Password" value={user_password} onChange={e=> setpassword(e.target.value) } required/>
         </div>
         {/* <Link class="nav-link" to="/Terms" > */}
   
         <button onClick={onSubmitform}>LOGIN</button>
   {/* </Link> */}
         <div class="link">
         <Link class="nav-link" to="/Sign" style={{color:"red"}}>
              
            Not a member?/ 
            <a href="#">Signup now</a>
                 </Link>   
         </div>
      </form>
      <Link class="nav-link" to="/Join" style={{color:"red"}}>
                   
         Join our team now - click here
       </Link>
   </div>
   
   </div>  
   
    </Fragment>
  );
}

export default Login;
