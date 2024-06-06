const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//get all Users
exports.getAllUserItems = async (req, res) => {
    try {
        const userItems = await User.find();
        res.json(userItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }

exports.getUserItem = async (req, res) => {
    try {
        const userItem = await User.findOne({email:req.params.id});
        res.json(userItem);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}





//update a User
exports.updateUserItem=  async(req,res)=>{
    try{
        const updatedUserItem = await User.findOneAndUpdate
        ({email:req.params.id},req.body,{new:true});
        res.status(200).json("User updated successfully");
    }catch(e){
        res.status(400).json({error:e.message});

    }
}

exports.updateUserItemByPatch=  async(req,res)=>{
    try{
        const updatedUserItem = await User.findOneAndUpdate({email:req.params.id},req.body,{new
        :true});
        res.status(200).json("User patched successfully");
        

}
catch(e){
    res.status(400).json({error:e.message});
}
}
//delete a User
exports.deleteUserItem = async(req,res)=>{
    try{
        await User.deleteOne({email:req.params.id});
        res.status(200).end("User deleted successfully");
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

// Register a new user

exports.createUserItem = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user = await User.findOne({email:email});
        if(user){
            return res.status(400).json({message:`User ${name} already exists`});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUserItem = new User({name,email,password:hashedPassword});
        const userItem = await newUserItem.save();
        res.status(200).json({message:`User ${name} registered successfully`});
    }catch(e){
        res.status(400).json({error:e.message});
    }
}

// Login endpoint
exports.loginUserItem= async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        console.log(user);
        if(!user){
            res.status(401).json({error:'Invalid credentials'});
        }
       
        // verify password
       
        const isPasswordValid = await bcrypt.compare(password,user.password);
       

        if(isPasswordValid){
            // Generate a JWT token
         const   token = jwt.sign({email,role:user.role},process.env.SECRET_KEY);
           
            res.status(200).json({token});
        }else{
            res.status(401).json({error:'Invalid credentials'});
       }
    }
    catch(e){
        res.status(401).json({message:'Authentication failed'});
    }
}




// Protected route
exports.protectedRoute = async (req,res)=>{
    
    const token = req?.headers?.authorization.split(' ')[1];
    
    if(!token){
        res.status(401).json({message:'Unauthorized access'});
    }

   jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
    console.log(decoded);
        if(err){
            return res.status(401).json({message:'Invalid token'});
        }
        
    })
    
    
    res.json({message:'You are authorized'});
}

