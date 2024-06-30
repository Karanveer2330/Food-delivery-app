import React,{useEffect,useState} from 'react'
const Cart =()=>{

  const[menu,setMenu]=useState([])

const getmenu = async ()=>{
try {
  const response = await fetch("http://localhost:5000/menu");
const jsondata = await response.json();
setMenu(jsondata)
} catch (err) {
  console.error(err.message)
  
}
}

useEffect(()=>{
getmenu();
},[]);
console.log(menu)



const deleteMenu = async id=>{
try {
  const deleteMenu = await fetch(`http://localhost:5000/menu/${id}`,{
method: "DELETE"
})
setMenu(menu.filter(todo => todo.id !==id))

} catch (err) {
  console.error(err.message)
  
}
}




const onSubmitform =async()=>{
 

try {
   
    const response = await fetch("http://localhost:5000/food",{
    method:"POST"
    
  });
  console.log(response);
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
{menu.map(menu => (
<tbody>

  <tr key={menu.id}>
   
<td> {menu.name}</td>
<td>{menu.ing}</td>
<td>{menu.size}</td>
<td>{menu.count}</td>
<td>{menu.price}</td>
<td><button class="btn btn-danger" onClick={()=>{deleteMenu(menu.id)}}>🗑️</button></td>
  </tr>
</tbody>
  ))
}
</table>
<div>

<button class="btn btn-primary" onClick={onSubmitform}>Proceed to buy</button>
</div>
    </div>
  )
  
}
export default Cart
