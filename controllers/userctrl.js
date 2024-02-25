const userModel=require('../models/usermodel');
const bycript=require('bcryptjs');




const registerctrl=async(req,res)=>{
    const {name,email,password,conformpass}=req.body;
      if(password.toLowerCase()===conformpass.toLowerCase()){

        try {
        



            const existuser=await  userModel.findOne({email:email});
            
            if(existuser){
                return res.status(200).send({message:'user alraedy exist',success:true})
            }
         const salt=await bycript.genSalt(10);
         const hashpass=await bycript.hash(password,salt);
    
        const user= await   userModel.create({name:name,email:email,password:hashpass})
               
                res.status(201).send({message:'user created successflly',success:true});
               
        } catch (error) {
            
        }
    
    
    }else{

        res.status(201).send({message:"password-mismatch",success:false})
    }
        
      }



    


module.exports={registerctrl}