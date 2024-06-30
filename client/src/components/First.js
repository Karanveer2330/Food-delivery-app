import React from 'react'
import './First.css'
import { Link } from 'react-router-dom'

function First() {
  return (
<>
<h4 className='Lo' d>
    We prefer you to first order from our choices
</h4>
       <div className='gh'> 

<div class="card" style={{height:"20em"}}>
  <img src="Thalli.png" class="card-img-top" alt="..." style={{height:"15em"}}/>

  <div class="card-body">
    <h5 class="card-title" style={{padding: "0"}}>Thalli</h5>
   
    <Link class="nav-link" to="/login">
      
    <a href="#" class="btn btn-primary" style={{background: "#ff662e7f"}}>Order</a>
</Link>
  </div>
</div>


<div class="card" style={{height:"20em"}}>
  <img src="fRIES.png" class="card-img-top" alt="..." style={{height:"14em"}}/>

  <div class="card-body">
    <h5 class="card-title" style={{padding: "0"}}>Fries</h5>

    <Link class="nav-link" to="/login">
      
    <a href="#" class="btn btn-primary" style={{background: "#ff662e7f"}}>Order now</a>
</Link>
  </div>
</div>



<div class="card" style={{height:"20em"}}>
  <img src="iCECR.png" class="card-img-top" alt="..." style={{height:"14em"}}/>

  <div class="card-body">
    <h5 class="card-title" style={{padding: "0"}}>Desserts</h5>
  
    <Link class="nav-link" to="/login">
      
    <a href="#" class="btn btn-primary" style={{background: "#ff662e7f"}}>Order now</a>
</Link>
  </div>
</div>


<div class="card" style={{height:"20em"}}>
  <img src="PANCAKES.png" class="card-img-top" alt="..." style={{height:"14em"}}/>

  <div class="card-body">
    <h5 class="card-title" style={{padding: "0"}}>Pancakes</h5>
 
    <Link class="nav-link" to="/login">
      
      <a href="#" class="btn btn-primary" style={{background: "#ff662e7f"}}>Order now</a>
  </Link>
  </div>
</div>


<div class="card" style={{height:"20em"}}>
  <img src="pizza.png" class="card-img-top" alt="..." style={{height:"15em"}}/>

  <div class="card-body">
    <h5 class="card-title" style={{padding: "0"}}>Pizza</h5>
 
    <Link class="nav-link" to="/login">
      
    <a href="#" class="btn btn-primary" style={{background: "#ff662e7f"}}>Order now</a>
</Link>
  </div>
</div>


       </div>

<div style={{paddingBottom:"2em",paddingTop:"8em"}}>
        
        <h4 class = 'hehe'>Our App works in these Places</h4>

    </div>
    <div className='gh'>
    <div class="card" style={{width: "18rem;"}}>
  <img src="kharar.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Kharar</p>
  </div>
</div>
<div class="card" style={{width: "18rem;"}}>
  <img src="ek_onkar.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Ek Onkar City</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="omega.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Omega City</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="aura_avenue.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Aura Avenue</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="modern_valley.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Modern Valley</p>
  </div>
</div>

{/* <div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}



    </div>

   
    </>
  )
}

export default First
