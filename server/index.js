const express = require('express')
const app = express()
const cors= require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());
app.post("/logins",async(req,res)=>{
try{
const {user_name,user_email,user_password,adr,adr1,city,state,zip,user_lname} = req.body;
const newLogins = await pool.query("INSERT INTO logins(user_name,user_email,user_password,adr,adr1,city,state,zip,user_lname) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
[user_name,user_email,user_password,adr,adr1,city,state,zip,user_lname]);
res.json(newLogins);
}catch(err){
    console.error(err.message);
}
});

app.post("/menu",async(req,res)=>{
  try{
  const {name,ing,size,count,price} = req.body;
  const newMenu = await pool.query("INSERT INTO menu(name,ing,size,count,price) VALUES($1,$2,$3,$4,$5) RETURNING *",
  [name,ing,size,count,price]);
  res.json(newMenu);
  }catch(err){
      console.error(err.message);
  }
  });
  
  
  app.post("/food",async(req,res)=>{
    try{

    const newFood = await pool.query("INSERT INTO food(name,ing,size,count,price) SELECT name,ing,size,count,price FROM menu;");
    res.json(newFood);
    }catch(err){
        console.error(err.message);
    }
    });
  
    
  app.post("/busi",async (req,res)=>{
    try{

      const {bname,description,pic,location} = req.body;
    const newBusi = await pool.query("INSERT INTO busi(bname,description,pic,location) VALUES($1,$2,$3,$4) RETURNING *;",
    [bname,description,pic,location]
   );
    res.json(newBusi);
    }catch(err){
        console.error(err.message);
    }
    });
    app.post("/items",async (req,res)=>{
      try{
  
        const {fname,f_ing,f_img,f_price} = req.body;
      const newItems = await pool.query("INSERT INTO items(fname,f_ing,f_img,f_price) VALUES($1,$2,$3,$4) RETURNING *;",
      [fname,f_ing,f_img,f_price]
     );
      res.json(newItems);
      }catch(err){
          console.error(err.message);
      }
      });
app.get("/menu", async(req,res)=>{
try {
  const allMenu = await pool.query("SELECT * FROM menu");
  res.json(allMenu.rows);
} catch (err) {
  console.error(err.message)
}
});

app.get("/items", async(req,res)=>{
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message)
  }
  });

app.get("/food", async(req,res)=>{
  try {
    const allFood = await pool.query("SELECT * FROM food");
    res.json(allFood.rows);
  } catch (err) {
    console.error(err.message)
  }
  });
  app.get("/logins", async(req,res)=>{
    try {
      const alllogin = await pool.query("SELECT * FROM logins");
      res.json(alllogin.row[4]);
    } catch (err) {
      console.error(err.message)
    }
    });
app.get("/users/:email",async(req,res)=>{
try {
 const {email}=req.params;
 const users = await pool.query("SELECT * FROM resert WHERE email=$1",[email]);
res.json(users.rows[0])
} catch (err) {
  console.error(err.message)
  
}
})


app.put("/users/:email", async(req,res)=>{
try {
  const {email} = req.params
  const {fname, lname,password,adr,adr2,city,state,zip}= req.body;
const updateUsers = await pool.query("UPDATE resert SET password =$1 WHERE email =$2",[password,email])
res.json("updated")
} catch (err) {
  console.error(err.message)
  
}
})

app.delete("/menu/:id",async(req,res)=>{
try {
 const {id}= req.params;

 const deleteUsers = await pool.query("DELETE FROM menu WHERE id =$1",[id]) 
res.json("DELETED");
} catch (err) {
  console.error(err.message)
  
}
})


app.delete("/food/:id",async(req,res)=>{
  try {
   const {id}= req.params;
  
   const deleteUsers = await pool.query("DELETE FROM food WHERE id =$1",[id]) 
  res.json("DELETED");
  } catch (err) {
    console.error(err.message)
    
  }
  })
  
  
  app.use("/authentication", require("./Routes/jwtAuth"));

app.use("/dashboard",require("./Routes/dashboard"))



app.listen(5000, () => {
  console.log("App running on port 5000 ")
})