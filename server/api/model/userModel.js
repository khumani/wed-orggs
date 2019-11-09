const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let userRegister = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    email:{
        type:String
    }
},
);
module.exports = mongoose.model('UserRegister', userRegister);