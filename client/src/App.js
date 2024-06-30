import "./App.css";
import Businesspg from "./components/CustomerMo/Businesspg";
import Obj from "./components/Obj"
import Navbar from "./components/Navbar";
import React, {useState,useEffect} from "react";
import { Fragment } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Delivers from "./components/CustomerMo/Delivers";
import Join from "./components/Join";
import Sign from "./components/Sign";
import EntryLogin from "./components/CustomerMo/EntryLogin";
import PPMenu from "./components/PPMenu";
import Cart from "./components/Cart";
import Orders from "./components/CustomerMo/Orders";
// import Cards from "./components/Cards";
import Termsm from "./components/CustomerMo/Termsm";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  render

} from "react-router-dom";
import Terms from "./components/Terms";
import Last from "./components/Last";
import { toast } from "react-toastify";

// toast.configure();

function App(props) {




    const checkAuthenticated = async () => {
      try {
        const res = await fetch("http://localhost:5000/authentication/verify", {
          method: "POST",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseRes = await res.json();
  
        parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      checkAuthenticated();
    }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };



















  
  const[log,setlog]=useState(true);
  const loggedin =()=>{
  if(log == true){
    setlog(false);
  }
  }
  
  const[check,setCheck]=useState(true)
const changeit = () =>{
  if(check== true)
  setCheck(false)

  else
  setCheck(true)
}
const [tick, setTick] = useState(true);

const onInput = () =>{ 
if(tick == true)
  setTick(false);

else
setTick(true)
}

const[logi,setLogi]=useState(true)
const logge =()=>{
 
    setLogi(false)


}

const antiLogi=()=>{
setLogi(true)
}



  
  return (
    <Fragment>

  
    <>
   
    

    <div className="hex">
      <Router>
    <Navbar changeit={check} logi={logi} antiLogi={antiLogi} setAuth={setAuth} loggerm={log}/>
      <div className="container my-3">

   
      <Routes>
        
          <Route exact path="/about" element={ <Obj/>}>
        
       

          </Route>
          <Route exact path="/login" Component={props =>
                !isAuthenticated ? ( <Login setAuth= {setAuth}/>):(<Navigate to="/terms" />)}>
  

          </Route>
          
          <Route exact path="/"Component={props=> !isAuthenticated? ( <Home logged={logge} />):(<Navigate to="/login"/>)}>
            
          </Route>
          <Route exact path="/Join" element={  <Join />}>
          
          </Route>
          <Route exact path="/Sign" Component={props=> !isAuthenticated?  (<Sign setAuth={setAuth} />):(<Navigate tp ="/terms"/>)}>
          
          </Route>
          <Route exact path="/Terms" element={ <Terms onInput={onInput} changeit={changeit} tick={tick}/>}>
          
          </Route>
          <Route exact path="/PPMenu" Component={props=> isAuthenticated? ( <PPMenu/>):(<Navigate to="/login"/>)}>
        
          </Route>



          <Route exact path="/Elogin" Component={props=>!isAuthenticated? ( <EntryLogin logi={logi} setAuth={setAuth}/>):(<Navigate to="/termsm"/>)}>
 

          </Route>
          <Route exact path="/Businesspg" element={  <Businesspg logi={logi}/>}>
 

          </Route>
          <Route exact path="/cart" Component={props=> isAuthenticated? ( <Cart/>):(<Navigate to="/login"/>)}>
 

 </Route>
 <Route exact path="/orders" element={  <Orders logi={logi}/>}>
 

 </Route>
 <Route exact path="/termsm"  element={ ( <Termsm loggedin={loggedin} tick={tick} onInput={onInput} logi={logi}/>)}>
 

 </Route>
 <Route exact path="/dashboard" Component={props=> isAuthenticated? ( <Dashboard setAuth={setAuth}/>):(<Navigate to="/login"/>)}>
 

 </Route>

 <Route exact path="/Delivers" element={  <Delivers/>}>
 

 </Route>





        </Routes>
      </div>
    
{/* <div hidden> <Terms onInput={onInput} changeit={changeit} tick={tick}/></div> */}
    </Router>
    </div>
 

    
    </>
    </Fragment>
  );
}

export default App;
