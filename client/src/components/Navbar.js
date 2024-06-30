import React, { useState , Fragment, useEffect,toast } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login";
function Navbar(props) {
  const refreshPage =()=>{
  setInterval(() => {
      window.location.reload();
      
    }, 1000);
  } 


  const [name, setName] = useState("");

  async function getName() {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await res.json();
      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      props.setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getName();
  }, []);




  return (
    <>
    <Fragment>

    <div className="bg">

      <nav
        class="navbar navbar-expand-lg navbar"
        >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/" style={{paddingRight:"5em",paddingLeft:"5em",color:"Purple"}}>
            <h3 class='zaika' onClick={props.antiLogi}>

            Zaika
       
            </h3>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          
            <div class="navbar-nav" style={{paddingLeft:"8em",paddingRight:"8em"}}>
              <Link class="nav-link active" aria-current="page" to="/" onClick={props.antiLogi}>
                Home
          
              </Link>
              <Link class="nav-link" to="/about" onClick={props.antiLogi}>
                About us
              </Link>
              <Link class="nav-link" to="/about">
                Customer Service
              </Link>
              <Link class="nav-link" to="/about">
             
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{backgroundColor:"rgba(240, 248, 255, 0.173)"}}>Dropdown</a>
    <ul class="dropdown-menu" style={{backgroundColor:"rgba(240, 248, 255, 0.173)"}}>
      <li><a class="dropdown-item" href="#" >Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"/></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <div>
    {name}
  </div>

              </Link>
            </div>
        { (props.changeit == false) && <Link class='nav-link' to="/cart">
<div>
  My Cart
</div>

        </Link>
        
      } 




            { (props.changeit == false) &&   <Link class="nav-link" to="/login" onClick={logout} onClick={refreshPage}>
                
                
                <div >

                 &nbsp;LogOut
                </div>
              </Link>
  }
           
             {
               (props.loggerm == true)&& props.logi==true && (props.changeit == true) && <Link class="nav-link" to="/login">
                <img src="6681204.png" style={{height:"1.5em"}}></img>
               Login
               
               
             
             </Link>
}

{(props.loggerm == false) && <Link class="nav-link" to="/orders">
<div>
&nbsp;Orders
</div>
</Link>}
            
{(props.loggerm == false) && <Link class="nav-link" to="/Elogin" onClick={refreshPage}>
<div>
&nbsp;LogOut
</div>
</Link>}
          </div>
   
        </div>
      </nav>
            </div>
            
                  </Fragment>

    </>
  );
}

export default Navbar;
