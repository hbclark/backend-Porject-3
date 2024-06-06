const mongoose = require ("../db")

const employeeSchema = new mongoose.Schema({
    Empid:Number,
    Username:String,
    Password:String,
})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;