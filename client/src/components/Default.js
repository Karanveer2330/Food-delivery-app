import React,{useState} from "react";
import PPMenu from "./PPMenu";

/* React component where show/hide 
  functionality is implemented */
export default function Default(props) {
  const [val,setVal]=useState(0);


    let value = 0;
    let CLICK = () => {
        if (value<1){
            let numContainer = document.getElementById("num");
            
            let btnInc = document.querySelector(".inc");
            let btnDec = document.querySelector(".dec");
            let btnReset = document.querySelector(".reset");
            
        btnInc.addEventListener("click", () => {
            
            value++;
            numContainer.textContent = value;
            
        });
        
        btnDec.addEventListener("click", () => {
            if( value >1){
                value--;
              }
              setVal(value)
              props.setCount(value)
              numContainer.textContent = value;
        });
        
    }    
}
    
    return (
        
        <div className="default-container">
      

    <div class="container" > <h4>
      Select Quantity:
      </h4>
      <div class="btns">
        <button class="dec" >
      -
        </button>
      <h1 id="num">0</h1>
        <button class="inc" onClick={CLICK}>
  +
        </button>
  
      </div>
    </div>
  
  <div style={{display:'flex',flexDirection:"row",paddingLeft:"10em",paddingRight:"10em"}}>
<div>

    <label>Toppings:</label>
<input type='checkbox'></input>
</div>
<div>

<label>Cutlery:</label>
<input type='checkbox'></input>
</div>
<div>

<label>saddas:</label>
<input type='checkbox'></input>
</div>
  </div>

    </div>
  );
}