const express = require("express");
const mongoose = require("mongoose");
const userModal = require("./shcema/user_schema");
const app = express();

const port= process.env.PORT || 3002
const cors= require('cors');


app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({extended: false}));
app.use(cors());



app.listen(port, (err)=> {
    if(!err) {
        console.log(`Server started at port ${port}`)
    } else {
        console.log(err);
    }
});



mongoose.connect("mongodb+srv://ayush:ayush12@instaclonecluster.sw7rw.mongodb.net/instaclone?retryWrites=true&w=majority", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.get("/user", (req, res)=> {
    userModal.find().then((userData)=> {
        res.status(200).send({user: userData});
    });
});

app.post("/add", (req, res)=> {
    const user_data= new userModal(req.body);
    // res.send(user_data);
    // console.log(user_data);
    user_data.save().then((user)=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});

// app.get("/", (req, res)=> {
//     res.send("instaclone Backend")
// });