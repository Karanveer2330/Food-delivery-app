import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Default from './Default'
import ToggleVisibility from './ToggleVisibiltiy'
import "./PPMenu.css"
import Cart from './Cart'
function PPMenu(props) {
const [name,setName]=useState("");
const [ing,setIng]=useState("");
const [size,setSize]=useState("");
  const[count,setCount]=useState(1);
  const[price,setPrice]=useState();

const onSubmitform = async(e)=>{
 
e.preventDefault();
setCount(props.val)
if (count!=""){
try {
    const body = {name,ing,size,count,price};
    const response = await fetch("http://localhost:5000/menu",{
    method:"POST",
    headers: {"Content-Type":"application/json"},
    
    body: JSON.stringify(body)
  });
  console.log(response);
} catch (err) {
  console.error(err.message)
  
}
}
}



const[items,setitems]=useState([])

const getitems = async ()=>{
try {
  const response = await fetch("http://localhost:5000/items");
const jsondata = await response.json();
setitems(jsondata)
} catch (err) {
  console.error(err.message)
  
}
}

useEffect(()=>{
getitems();
},[]);
console.log(items)



let v= items.f_price;
if(v<500){
if(v<100){
v=1.3*v
setPrice()
}
if(v>=100){
v=1.25*v
}
}
else{
v=1.15*v
}




  return (
<>
<div hidden>

<Cart name={name} ing={ing} size= {size}/>
</div>
    <div class="bba">
<div class="cca"style={{width: "50%"}} >
  <img src="Vector Takeaway Rider Delivery Background.jpg" class="card-img" alt="..." style={{height:"13em",width: "26em"}}/>
  
    
    <h4 class="card-title1" style={{height:"2em",width:"9em"}}>Delivery Available Now!</h4>
  </div>
  <div>
    <h3>
    Offers%
    </h3>
  </div>
</div>


{
items.map(items=>
<div class="card mb-3" style={{width: "100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="PANCAKES.png" class="img-fluid rounded-start" alt="..."style={{height:"15em",width: "20em"}}/>
    </div>
   
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title" >{items.fname}</h3>
        <h5 class="card-text">{items.f_ing}</h5>
<br></br>
<label>
    <h5>
        Size : 
        </h5>
        </label>

        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" onClick={e=>setSize("Small")}/>
<label class="btn" for="option1">Small</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" onClick={e=>setSize("Medium")}/>
<label class="btn " for="option2">Medium</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" onClick={e=>setSize("Large")}/>
<label class="btn" for="option3">Large</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" onClick={e=>setSize("Extra Large")}/>
<label class="btn" for="option4">Extra Large</label>

<div onClick={e=>{setName(items.fname);setIng(items.f_ing);setPrice(items.f_price)}}>

<ToggleVisibility >
          <Default />
      </ToggleVisibility>

</div>
<div > {items.f_price}</div>
<div className='card1'>

  <button onClick={onSubmitform}>Add to cart</button>
</div>



      </div>

    
    </div>

  </div>
</div>
)
}

<div class="card mb-3" style={{width: "100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="pizza.png" class="img-fluid rounded-start" alt="..." style={{height:"15em",width: "20em"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h3 class="card-title">Pancakes</h3>
        <h5 class="card-text">Ingredients: ata,pani,chawl</h5>
<br></br>
<label>
    <h4>
        Size : 
        </h4>
        </label>

        <input type="radio" class="btn-check" name="options" id="option9" autocomplete="off"/>
<label class="btn" for="option9">Small</label>

<input type="radio" class="btn-check" name="options" id="option10" autocomplete="off"/>
<label class="btn" for="option10">Medium</label>

<input type="radio" class="btn-check" name="options" id="option11" autocomplete="off" />
<label class="btn" for="option11">Large</label>

<input type="radio" class="btn-check" name="options" id="option12" autocomplete="off"/>
<label class="btn" for="option12">Extra Large</label>

<ToggleVisibility>
        <Default />
      </ToggleVisibility>

      <div className='card1'>

<button onClick={e=>{setName("Pancakes");setIng("ata")}}>Add to cart</button>
</div>



      </div>

    
    </div>

  </div>
</div>

<div class="card mb-3" style={{width: "100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="iCECR.png" class="img-fluid rounded-start" alt="..." style={{height:"15em",width: "20em"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h3 class="card-title">sa</h3>
        <h5 class="card-text">Ingredients: ata,pani,chawl</h5>
<br></br>
<label>
    <h4>
        Size : 
        </h4>
        </label>

        <input type="radio" class="btn-check " name="options" id="option5" autocomplete="off"/>
<label class="btn" for="option5">Small</label>

<input type="radio" class="btn-check" name="options" id="option6" autocomplete="off"/>
<label class="btn" for="option6">Medium</label>

<input type="radio" class="btn-check" name="options" id="option7" autocomplete="off" />
<label class="btn" for="option7">Large</label>

<input type="radio" class="btn-check" name="options" id="option8" autocomplete="off"/>
<label class="btn" for="option8">Extra Large</label>

<ToggleVisibility>
        <Default />
      </ToggleVisibility>
      <div className='card1'>

<button>Add to cart</button>
</div>
    



      </div>

    
    </div>

  </div>
</div>
<div class="card mb-3" style={{width: "100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="fRIES.png" class="img-fluid rounded-start" alt="..." style={{height:"15em",width: "20em"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h3 class="card-title">Pancakes</h3>
        <h5 class="card-text">Ingredients: ata,pani,chawl</h5>
<br></br>
<label>
    <h4>
        Size : 
        </h4>
        </label>

        <input type="radio" class="btn-check" name="options" id="option13" autocomplete="off"/>
<label class="btn" for="option13">Small</label>

<input type="radio" class="btn-check" name="options" id="option14" autocomplete="off"/>
<label class="btn" for="option14">Medium</label>

<input type="radio" class="btn-check" name="options" id="option15" autocomplete="off" />
<label class="btn" for="option15">Large</label>

<input type="radio" class="btn-check" name="options" id="option16" autocomplete="off"/>
<label class="btn" for="option16">Extra Large</label>

<ToggleVisibility>
        <Default />
      </ToggleVisibility>

    
      <div className='card1'>

<button>Add to cart</button>
</div>


      </div>

    
    </div>

  </div>
</div>
<div class="card mb-3" style={{width: "100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="Thalli.png" class="img-fluid rounded-start" alt="..." style={{height:"15em",width: "20em"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h3 class="card-title">Pancakes</h3>
        <h5 class="card-text">Ingredients: ata,pani,chawl</h5>
<br></br>
<label>
    <h4>
        Size : 
        </h4>
        </label>

        <input type="radio" class="btn-check" name="options" id="option17" autocomplete="off"/>
<label class="btn" for="option17">Small</label>

<input type="radio" class="btn-check" name="options" id="option18" autocomplete="off"/>
<label class="btn" for="option18">Medium</label>

<input type="radio" class="btn-check" name="options" id="option19" autocomplete="off" />
<label class="btn" for="option19">Large</label>

<input type="radio" class="btn-check" name="options" id="option20" autocomplete="off"/>
<label class="btn" for="option20">Extra Large</label>

<ToggleVisibility>
        <Default />
      </ToggleVisibility>

      <div className='card1'>

<button>Add to cart</button>
</div>



      </div>

    
    </div>

  </div>
</div>


</>
  )
}

export default PPMenu
