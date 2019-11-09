const express = require('express');

const mongoose = require('mongoose');
const app = express();
require('../model/testquery');
 require('../model/contact');
var UserRegister=require('../model/userModel');
const User = mongoose.model('users');

const Contact = mongoose.model('contacts');

const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})


router.post('/add',function(req,res){
    const city=req.body.city
    const Cost=req.body.Cost
    const image=req.body.image

    const name=req.body.name
    const address=req.body.address
    new User({
        address:address,
        Cost:Cost,
        name:name,
        city:city,
        image:image
        
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})


//Contact Add

router.post('/cadd',function(req,res){
    const acity=req.body.acity
    const eemail=req.body.eemail
    const fname=req.body.fname
    const taddress=req.body.taddress
    new Contact({
        taddress:taddress,
        eemail:eemail,
        fname:fname,
        acity:acity,
        
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})

// /View Contact

router.get('/cview',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})


//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        name : req.body.name,
        Cost : req.body.Cost,
        city : req.body.city,
        address : req.body.address
    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})

//Contact

router.post('/cadd',function(req,res){
    const acity=req.body.acity
    const eemail=req.body.eemail
    const fname=req.body.fname
    const taddress=req.body.taddress
    new contact({
        taddress:taddress,
        eemail:eemail,
        fname:fname,
        acity:acity,
        
    })
    .save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//registrATION
router.post('/addRegister',function(req,res){
    const mno=req.body.mno
    const email=req.body.email
    const name=req.body.name
    // const name=req.body.name
     const password=req.body.password
    new UserRegister({
        email:email,
        name:name,
        name:name,
        mno:mno,
        password:password
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
////login pass
router.post('/signIn',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    UserRegister.findOne({
        email:email
    },(err,user)=>{
        if(err){
            res.json(err);
        }
        else{
            console.log(user);
            if(user == null ){
              res.json({message:"Check your Credentials"});
            }
            else if (user.password != password){
                res.json({message:"Check your password"});
            }
            else{
                res.json(user);
            }
        }
    })
})
// router.post('/addRegister',function(req,res){
//     const city=req.body.city
//     const email=req.body.email
//     const name=req.body.name
//     const password=req.body.password
//     const address=req.body.address
//     new UserRegister({
//         address:address,
//         email:email,
//         name:name,
//         city:city,
//         password:password
//     }).save(function(err,data){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(data)
//             res.json(data)
//         }
//     })
// })
module.exports = router;