const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator");
const { restart } = require("nodemon");
const validInfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");
const configs = require("../config");
// //registering
// router.post("/register",validInfo, async (req, res) => {
//     try {
//         //1. destructure the req.body (name email password)
//         const {name, email, password} = req.body;
        
//         //2. check if user exists (if user exists throw error)
//         const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
//             email
//         ]);

//         if(user.rows.length !== 0){
//             return res.status(401).json("User already exists");
//         }
//         //3. bcrypt the password
        
//         const saltRound = 10;
//         const salt = await bcrypt.genSalt(saltRound);

//         const bcryptPassword = await bcrypt.hash(password,salt);
//         //4. enter the new user inside our database
//         const newUser = await pool.query(
//             "INSERT INTO users (user_name, user_email,user_password) VALUES ($1, $2, $3) RETURNING *",
//             [name, email, bcryptPassword]);
//         //5. generating our jwt token
//         const token = jwtGenerator(newUser.rows[0].user_id);
//         console.log(req.body);
//         return res.json({token});

//     }catch(err){
//         console.log(err.message);
//         res.status(500).send("Server Error");
//     }
// });


//login into hardcoded account master values
router.post("/login",validInfo, async(req, res)=>{
    try{
        //1. destructure the req.body

        const {username, password} = req.body;
        console.log(username, password, configs.logininfo);
        //2. check if user matches login info 
        if(username != configs.loginInfo.username || password != configs.loginInfo.password){
            console.log("username and password not correct")
            return res.status(401).json("Password or username is incorrect");
        }
        //3. create jwt token
        const token = jwtGenerator(username);

        return res.json({token});
    }catch(err){
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

// router.post("/changePassword",validInfo, async(req, res)=>{
//     try{
//         //1. destructure the req.body

//         const {email, password} = req.body;

//         //2. check if user doesn't exist

//         const user = await pool.query("SELECT * FROM users where user_email = $1",[email]);

//         if(user.rows.length === 0){
//             return res.status(401).json("Password or Email is incorrect");
//         }
//         //check if incoming ppassswod is the same the database password

//         const validPassword = await bcrypt.compare(password,user.rows[0].user_password);
//         if(!validPassword){
//             return res.status(401).json("Password or Email is incorrect");
//         }
//         //4 
//         const token = jwtGenerator(user.rows[0].user_id);

//         return res.json({token});
//     }catch(err){
//         console.log(err.message);
//         res.status(500).send("Server Error");
//     }
// });

router.get("/verify",authorization,async (req, res)=> {
    
    try {
        console.log("verification passed");
        res.json(true);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;