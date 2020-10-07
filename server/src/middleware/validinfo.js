module.exports = function(req, res, next) {
    const { username, name, password } = req.body;
    console.log("validating info here bro");
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
  
    if (req.path === "/register") {
      //console.log(!email.length);
      if (![username, name, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(username)) {
        return res.json("Invalid Email");
      }
    } else if (req.path === "/login") {
      
      if (![username, password].every(Boolean)) {
        console.log("missing");
        return res.json("Missing Credentials");
      } 
      else if (!validEmail(username)) {
        // return res.json("Invalid Email");
      }
    }
  
    next();
  };
