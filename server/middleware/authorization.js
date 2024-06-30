const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = async(req, res, next) =>{
  // Get token from header
  const jwtToken = req.header("token");

  // Check if not token
  if (!jwtToken) {
    return res.status(403).json( "authorization denied" );
  }

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(jwtToken, "" + process.env.jwtSecret);

    req.user = payload.user;
    
  } catch (err) {
    res.status(403).json("Token is not valid" );
  }
};