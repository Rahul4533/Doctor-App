const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
name:{
    type: String,
    require:[true,'name is required']
},
email:{
    type:String,
    require:[true,'email is required']
},
password:{
    type:String,
    require:[true,'password os required']
},
},{timestamps: true});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;