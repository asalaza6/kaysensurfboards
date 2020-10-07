const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");
const configs = require('../config');
const nodemailer = require("nodemailer");
router.get("/", authorization, async (req, res)=>{
    try {

        const user = await pool.query("SELECT * FROM users WHERE user_id = $1",[
            req.user
        ]);
        res.json(user.rows[0]);
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});
router.get("/reviews", async (req, res)=>{
    try {

        const reviews = await pool.query("SELECT review_id,review_contents,review_name,image_type FROM reviews WHERE approved = $1",
        [true]);
        // console.log(reviews);
        res.json(reviews);
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});
router.get("/approve", async (req, res)=>{
    try {

        const reviews = await pool.query("SELECT review_id,review_contents,review_name,image_type FROM reviews WHERE approved = $1",
        [false]);
        // console.log(reviews);
        res.json(reviews);
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});
router.post("/approvereview", authorization, async (req, res)=>{
    try {
        
        //destructure body
        let {id,approve} = req.body;
        console.log(req.body);
        let updateReview = null;
        //insert new comment
        if(approve){
            updateReview = await pool.query(
            "UPDATE reviews SET approved = $1 WHERE review_id = $2",
            [true,id]);
        }
        else{
            updateReview = await pool.query(
            "DELETE FROM reviews WHERE review_id = $1 RETURNING *",
            [id]);

        }
        console.log(updateReview);
        res.json(updateReview);
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});
router.get("/comments", authorization, async (req, res)=>{
    try {

        const comments = await pool.query("SELECT comment_content,create_timestamp FROM comments WHERE image_id = $1 ORDER BY create_timestamp ASC",[
            req.header("image")
        ]);
        
        res.json(comments);
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});
router.post("/comments", authorization, async (req, res)=>{
    try {
        
        //destructure body
        let {image,content} = req.body;
        let user = req.user;
        console.log(req.body);
        //insert new comment
        const newComment = await pool.query(
            "INSERT INTO comments (user_id,comment_content,image_id) VALUES ($1,$2,$3) RETURNING *",
            [user,content,image]);
        res.json(newComment);
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});
router.post("/upload", async (req, res)=>{
    console.log("uploading picture");
    try {
        //destructure body
        let {name, content, image} = req.body;
        
        //format string to data and type
        var base64Data = image.replace(/^data:image\//, "");
        var type = base64Data.split(/;/);
        base64Data = type[1].replace(/base64,/,"");
        type = type[0];
        //insert image into table
        const newImage = await pool.query(
            "INSERT INTO reviews (review_contents,review_name,image_type) VALUES ($1,$2,$3) RETURNING *",
            [content,name,type]);
        //save image to server
        let fileName = newImage.rows[0].review_id;
        
        // console.log(type,base64Data.slice(0,100));
        // console.log(configs.images.location);
        require("fs").writeFile(configs.reviews.location+fileName+"."+type, base64Data, 'base64', function(err) {
            console.log(err);
        });
        //insert image into table
        // console.log(name,type);
        
        

        res.json("image uploaded");
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});

router.post("/contact", async (req, res)=>{
    console.log("contact");
    try {
        //destructure body
        let {name, email, message} = req.body;
        
        //create a transporter
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "asalazar9949@gmail.com",
                pass: "hippomeat21"
            }
        });
        //create mail options
        var mailOptions = {
            from: 'asalazar9949@gmail.com',
            to: 'asalaza6@uci.edu',
            subject: "kaysensurfboards.net Contact",
            text: message
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Email sent: ' + info.response);
            }
        });

        res.json("Message sent!");
    }catch(err){
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});

module.exports = router;