require("dotenv").config();
const path = require("path");
const jwt=require("jsonwebtoken");
const User=require("../model/user.model");
const newToken=(user)=>{
    return jwt.sign({user:user}, "sdfshdfldsjglfshglsdfghslfghfdslg",{
        expiresIn:60*60*5 
    });
};
const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email}).lean().exec()
        if(user){
            return res.status(400).send({message:"user is already exist.", error:true});
        }
        user=await User.create(req.body);
        const token=newToken(user);
        
        // user.otp = 6545;
        user.save();

        return res.status(201).send({user,token, error:false});
    }
    catch (error) {
        return res.status(500).send(error.message);
    } 
}
const login =async(req, res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send({message: "Invalid credential", error:true})
        }
        const match = user.checkPassword(req.body.password);
        if(!match){
            return res.status(400).send({message: "invalid credential", error:true})
        }
        const token=newToken(user);
        return res.status(201).send({user, token, error:false});
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
};
module.exports={register, login, newToken};