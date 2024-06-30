import React from 'react'
import { useState } from 'react'
import './Sign.css'
import { Fragment } from 'react'
import { toast } from "react-toastify";
function Sign(props) {

const [user_name,setfname]= useState("");
const [user_lname,setlname]= useState("");
const [user_email,setemail]= useState("");
const [user_password,setpassword]= useState("");
const [adr,setadr]= useState("");
const [adr1,setadr2]= useState("");
const [city,setcity]= useState("");
const [state,setstate]= useState("");
const [zip,setzip]= useState("");
const onSubmitForm = async(e)=>{
  e.preventDefault();
  try {
    const body = {user_name,user_email,user_password,adr,adr1,city,state,zip,user_lname};
  
  const response = await fetch(
    "http://localhost:5000/authentication/register",
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

    <div className='to'>
    
<div>
    <h3>Sign Up</h3>
</div>

<form class="row g-3" >

<div class="row1" >
    
  <div class="col">
    <label>First name:</label>
    <input type="text" class="form-control " placeholder="First name" aria-label="First name" value={user_name} onChange={e=> setfname(e.target.value)}/>
  </div>
  <div class="col">
  <label> &nbsp;Last name:</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" value={user_lname} onChange={e=> setlname(e.target.value)}/>
  </div>
</div>


<div class="row">

  <div class="col">
    <label for="inputEmail4" class="form-label"> Email: &nbsp; </label>
    <input type="email" class="form-control" id="inputEmail4" value={user_email} onChange={e=> setemail(e.target.value)}/>
  </div>
  <div class="col">
    <label for="inputPassword4" class="form-label">Password: </label>
    <input type="password" class="form-control" id="inputPassword4" value={user_password} onChange={e=> setpassword(e.target.value)}/>
  </div>
  
<div className='try'>

  <div class="col">
    <label for="inputAddress" class="form-label">Address 1</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={adr} onChange={e=> setadr(e.target.value)}/>
  </div>
  <div class="col">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={adr1} onChange={e=> setadr2(e.target.value)}/>
  
</div>
  </div>
  <div className='try1'>
<center>

  <div class="col">
    <label for="inputCity" class="form-label">City:</label>
    <input type="text" class="form-control" id="inputCity" value={city} onChange={e=> setcity(e.target.value)}/>
  </div>
  <div className='try2'>

  <div class="col">
    <label for="inputState" class="form-label">State:</label>
    <input type="text" class="form-control" id="inputState" value={state} onChange={e=> setstate(e.target.value)} style={{Left:"20em"}}/>
  </div>
  </div>
  <div class="col">
    <label for="inputZip" class="form-label">Zip: </label>
    <input type="text" class="form-control" id="inputZip" value={zip} onChange={e=> setzip(e.target.value)}/>
  </div>
</center>
  <div class="col">
  </div>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={onSubmitForm} >Sign in</button>
  </div>
</div>
</form>

    </div>
    </Fragment>
  )
}

export default Sign
