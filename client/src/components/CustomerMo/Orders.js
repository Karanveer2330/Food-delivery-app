import React,{useEffect,useState} from 'react';

function Orders(props){

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
      Name
    </b>
      </h4>
      </th>
    <th>
      <h4>

      <b>

      Ingredients
      </b>
      </h4>
      </th>
    <th>
      <h4>
<b>
  
      Size
</b>
      </h4>

    </th>
    <th>
      <h4>
<b>

      Count
</b>
      </h4>
      </th>
    <th>
      <h4>
<b>

      Price
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
   
<td> {food.name}</td>
<td>{food.ing}</td>
<td>{food.size}</td>
<td>{food.count}</td>
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
export default Orders
