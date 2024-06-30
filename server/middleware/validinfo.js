module.exports = function(req, res, next) {
  const { user_email, user_name, user_password ,user_lname,adr , adr1, city, state, zip } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/register") {
    // console.log(!email.length);
    if (![ user_email, user_name, user_password ,user_lname,adr , adr1, city, state, zip].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(user_email)) {
      return res.json("Invalid Email");
    }
  } else if (req.path === "/login") {
    if (![user_email, user_password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(user_email)) {
      return res.json("Invalid Email");
    }
  }

  next();
};

 