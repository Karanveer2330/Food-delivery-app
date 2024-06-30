import React,{useEffect,useState} from 'react';

function Delivers(props){

  const[food,setfood]=useState([])

const getfood = async ()=>{
try {
  const response = await fetch("http://localhost:5000/food");
const jsondata = await response.json();
setfood(jsondata)
} catch (err) {
  console.error(err.message)
  
}
}

useEffect(()=>{
getfood();
},[]);
console.log(food)


const[login,setlogin]=useState([])

const getlogin = async ()=>{
try {
  const response = await fetch("http://localhost:5000/logins");
const jsondata = await response.json();
setlogin(jsondata)
} catch (err) {
  console.error(err.message)
  
}
}

useEffect(()=>{
getlogin();
},[]);
console.log(login)


const deleteMenu = async id=>{
try {
  const deleteMenu = await fetch(`http://localhost:5000/food/${id}`,{
method: "DELETE"
})
setfood(food.filter(food => food.id !==id))

} catch (err) {
  console.error(err.message)
  
}
}







  return (
    <div>
    
     <table class='table mt-5 text-center'>
      
  <thead>

    <tr>

    <th>
      <h4 >
    <b>
     Customer Name
    </b>
      </h4>
      </th>
    <th>
      <h4>

      <b>

      Address 1
      </b>
      </h4>
      </th>
    <th>
      <h4>
<b>
  
      Address 2
</b>
      </h4>

    </th>
    <th>
      <h4>
<b>

      Food item
</b>
      </h4>
      </th>
    <th>
      <h4>
<b>

    Amount
</b>
      </h4>
      </th>
      <th>
        <h3>
          
        🛒
        </h3>
      </th>
  </tr>
  </thead>

{food.map(food => (
<tbody>

  <tr key={food.id}>
  {login.map(login=>(
  <>
    <td>{login.user_name}</td>
    <td>{login.adr}</td>
  </>

    
    ))} 
<td>{food.name}</td>
<td>{food.price}</td>
<td><button class="btn btn-danger" onClick={()=>{deleteMenu(food.id)}}>Done</button></td>
  </tr>
</tbody>
  ))
}
</table>
<div>

{/* <button class="btn btn-primary" onClick={onSubmitform}>Proceed to buy</button> */}
</div>
    </div>
  )
  
}
export default Delivers
