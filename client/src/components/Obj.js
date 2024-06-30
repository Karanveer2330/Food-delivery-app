import React, {useState} from 'react'
import './Obj.css'
export default function Obj(props) {
  let [text, setText] = useState("enter text ");
  let click =()=>{
    console.log("as")
    let newtext = text.toUpperCase();
    setText( newtext);
  }
  let handleOnChange = (event) =>{
    setText(event.target.value);
  }
  
  let [toggl, setToggl] = useState("Light mode");
  let [myStyle,setMyStyle] = useState(
    {color:'white',
    backgroundColor: 'rgb(1, 0, 72)'}
    );
    
    
    let toggle = () =>{
      if(myStyle.color=='white'){
        setMyStyle({
    color: ' rgb(0, 41, 76)',
    backgroundColor: 'white'
  })
  setToggl("Dark mode")
}
else{
  setMyStyle({
    color: 'white',
    backgroundColor:'black'
  })
  setToggl("Light mode")
}
}


return (
  
<>
   <center>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        App Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>With our app, you can easily order food from your favorite restaurants, browse menus, and track your order in real-time, so you know exactly when your delicious meal will arrive.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Corporate Support Function
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Our corporate support team is made up of experienced professionals who specialize in areas such as finance, HR, marketing, and IT. They work closely with the various departments within our company to provide the necessary support and resources needed to keep our app running smoothly and our customers happy.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Cloud Kitchen Manager
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Our kitchen manager plays a critical role in the success of our online food delivery app. He is responsible for ensuring that all food is prepared to the highest standards, that the kitchen operates efficiently, and that the menu is updated regularly to meet changing customer preferences. With his expertise and dedication, he helps ensure that the company continues to provide its customers with the best possible food delivery experience.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Customer Care
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>At our online food delivery app, we are committed to providing exceptional customer service to our users. Our customer care team is dedicated to resolving any issues or concerns that our customers may have, and ensuring that their experience with our app is as seamless and enjoyable as possible.</p>
      </div>
    </div>
  </div>
</div>

    
   </center>
   <div class="bi">

{/* <h2>Review</h2>

<div class="one">
    <h1>{props.heading}</h1>

      <textarea className="form" value={text} onChange ={handleOnChange} style={myStyle}  id="aform"  cols="200" rows="2">
      </textarea>

      <button id="sa my=2" onClick={click}>
        click
      </button>
</div> */}

{/* <toggle onClick={toggle} >{toggl}</toggle>
<h6>{text.length} characters and {text.split(" ").filter((element)=>{return element.length!=0}).length} words</h6> */}
   </div>
      </>
  )
}


