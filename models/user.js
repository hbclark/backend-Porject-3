const mongoose = require ("../db")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role:{type:String,default:"member"}
})

const User = mongoose.model("User",userSchema);

module.exports = User;